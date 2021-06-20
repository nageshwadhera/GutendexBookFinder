import React from "react";
import Book from "./Book";
import IMAGES from "../images";
import "./Search.css";
import Guntendex from "../Api/Guntendex";
import InfiniteScroll from "react-infinite-scroll-component";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Genre: [], searchRef: "", page: 1, hasNext: true };
    this.loaderClass = React.createRef();
    this.value = React.createRef();
  }

  //Lifecycle initiator
  componentDidMount() {
    this.setState({ Genre: this.props.Genre });
  }

  //Function to return to main page
  returnBack = () => {
    this.props.RetClick("Default");
  };

  //Function for handling input
  onChange = async (event) => {
    event.preventDefault();
    this.setState({ searchRef: this.value.current.value, page: 1 });
    const response = await Guntendex.get("?mime_type=image%2F", {
      params: {
        topic: this.props.Heading,
        search: this.state.searchRef,
        page: this.state.page,
      },
    });
    this.setState((prevState) => ({
      Genre: response.data.results,
    }));
    response.data.next !== null
      ? this.setState((prevState) => ({
          Genre: response.data.results,
          hasNext: true,
        }))
      : this.setState({ hasNext: false });
  };

  //API infinite scroller call
  callApi = async () => {
    if (this.state.hasNext) {
      const response = await Guntendex.get("?mime_type=image%2F", {
        params: {
          topic: this.props.Heading,
          search: this.state.searchRef,
          page: this.state.page + 1,
        },
      });

      this.setState((prevState) => ({
        Genre: [...prevState.Genre, ...response.data.results],
        page: prevState.page + 1,
      }));
    } else {
      this.loaderClass.current.className = "";
    }
  };

  render() {
    return (
      <div id="books">
        <div id="heading">
          <button onClick={this.returnBack}>
            <img src={IMAGES.Back} alt="Next" />
          </button>
          <header>{this.props.Heading}</header>
        </div>
        <div id="searchBox">
          <form onSubmit={this.onChange}>
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Search"
              ref={this.value}
              value={this.state.searchRef}
              onInput={this.onChange}
            />
          </form>
        </div>

        <InfiniteScroll
          dataLength={this.state.Genre.length}
          next={this.callApi}
          hasMore={true}
          loader={<p className="loader" ref={this.loaderClass}></p>}
        >
          {this.state.Genre.map((book) => {
            return <Book key={book.id} Book={book} />;
          })}
        </InfiniteScroll>
      </div>
    );
  }
}

export default Search;
