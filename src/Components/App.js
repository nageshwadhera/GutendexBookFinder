import React from "react";
import Title from "./Title";
import Search from "./Search";
import Guntendex from "../Api/Guntendex";

class App extends React.Component {
  state = { genre: [], Category: "", Title: true, p: false };

  onTitleClick = async (Category) => {
    const response = await Guntendex.get("?mime_type=image%2F", {
      params: { topic: Category, page: 1 },
    });
    this.setState({ genre: response.data.results, Category });

    this.setState({ Title: false, p: true });
  };
  retClick = (Genre) => {
    Genre === "Default"
      ? this.setState({ Title: true, p: false })
      : this.setState({ Title: false, p: true });
  };
  render() {
    return (
      <div>
        {this.state.Title && <Title Category={this.onTitleClick} />}
        {this.state.p && (
          <Search
            Genre={this.state.genre}
            Heading={this.state.Category}
            RetClick={this.retClick}
          />
        )}
      </div>
    );
  }
}
export default App;
