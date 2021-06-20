import React from "react";
import "./Book.css";

class Book extends React.Component {
  renderBooks = () => {
    const FORMATS = this.props.Book.formats;
    var fileLink =
      "text/html" in FORMATS
        ? FORMATS["text/html"]
        : "text/html; charset=utf-8" in FORMATS
        ? FORMATS["text/html; charset=utf-8"]
        : "application/pdf" in FORMATS
        ? FORMATS["application/pdf"]
        : "text/plain" in FORMATS
        ? FORMATS["text/plain"]
        : "text/plain; charset=utf-8" in FORMATS
        ? FORMATS["text/plain; charset=utf-8"]
        : alert("No viewable Version Available");

    window.open(fileLink);
  };
  render() {
    return (
      <div>
        <button onClick={this.renderBooks} id="book">
          <img
            src={this.props.Book.formats["image/jpeg"]}
            alt="book-cover"
            id="bookCover"
          />
          <br />
          <p id="title">{this.props.Book.title}</p>
          {this.props.Book.authors.map((item, index) => (
            <div id="author" key={index}>
              <p>{item.name}</p>
            </div>
          ))}
        </button>
      </div>
    );
  }
}

export default Book;
