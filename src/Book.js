import React from "react";

class Book extends React.Component {
  render() {
    const { book } = this.props;

    return (
      <li>
        <img
          src={book.url}
          className="rounded float-left"
          alt={book.category}
        />
      </li>
    );
  }
}

export default Book;
