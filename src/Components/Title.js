import React from "react";
import IMAGES from "../images/index.js";
import "./Title.css";

class Title extends React.Component {
  state = { category: "" };

  onButtonClick = () => {
    this.props.Category(this.state.category);
  };

  render() {
    return (
      <div id="main">
        <div id="header">
          <div id="content">
            <header>Gutenberg Project</header>
            <p>
              A social cataloging website that allows you to freely search its
              database of books, annotations, and reviews.
            </p>
          </div>
        </div>
        <div id="buttons">
          <button
            onClick={this.onButtonClick}
            onMouseDown={(e) => this.setState({ category: "Adventure" })}
          >
            <img src={IMAGES.Adventure} alt="ADVENTURE" />
            <span>ADVENTURE</span>
            <img src={IMAGES.Next} alt="NextSign" />
          </button>
          <button
            onClick={this.onButtonClick}
            onMouseDown={(e) => this.setState({ category: "Drama" })}
          >
            <img src={IMAGES.Drama} alt="DRAMA" />
            <span>DRAMA</span>
            <img src={IMAGES.Next} alt="NextSign" />
          </button>

          <button
            onClick={this.onButtonClick}
            onMouseDown={(e) => this.setState({ category: "Fiction" })}
          >
            <img src={IMAGES.Fiction} alt="FICTION" />
            <span>FICTION</span>
            <img src={IMAGES.Next} alt="NextSign" />
          </button>
          <button
            onClick={this.onButtonClick}
            onMouseDown={(e) => this.setState({ category: "History" })}
          >
            <img src={IMAGES.History} alt="HISTORY" />
            <span>HISTORY</span>
            <img src={IMAGES.Next} alt="NextSign" />
          </button>
          <button
            onClick={this.onButtonClick}
            onMouseDown={(e) => this.setState({ category: "Humour" })}
          >
            <img src={IMAGES.Humour} alt="HUMOUR" />
            <span>HUMOUR</span>
            <img src={IMAGES.Next} alt="NextSign" />
          </button>
          <button
            onClick={this.onButtonClick}
            onMouseDown={(e) => this.setState({ category: "Philosophy" })}
          >
            <img src={IMAGES.Philosophy} alt="Philosophy" />
            <span>PHILOSOPHY</span>
            <img src={IMAGES.Next} alt="NextSign" />
          </button>
          <button
            onClick={this.onButtonClick}
            onMouseDown={(e) => this.setState({ category: "Politics" })}
          >
            <img src={IMAGES.Politics} alt="Politics" />
            <span>POLITICS</span>
            <img src={IMAGES.Next} alt="NextSign" />
          </button>
        </div>
      </div>
    );
  }
}

export default Title;
