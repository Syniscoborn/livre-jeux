import React from "react";

class Book extends React.Component {
  render() {
    const { filteredBook } = this.props;

    return (
      <li>
        <img
          src={filteredBook.url}
          className="rounded float-left"
          alt={filteredBook.category}
        />
      </li>
    );
  }
}

export default Book;
