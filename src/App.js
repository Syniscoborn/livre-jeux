import React from "react";
import "./App.css";
import Filters from "./Filters";
import Book from "./Book";
import config from "./config";
import firebase from "firebase";
import uniqid from "uniqid";

class App extends React.Component {
  constructor() {
    super();
    firebase.initializeApp(config);
    this.state = {
      books: "",
      filters: "",
      activeFilters: false,
      filteredBooks: ""
    };
    this.selectedListItem = this.selectedListItem.bind(this);
  }

  componentDidMount() {
    const books = firebase.database().ref("books");
    const filters = firebase.database().ref("filters");

    books.on("value", snapshot => {
      this.setState({
        books: snapshot.val(),
        filteredBooks: snapshot.val()
      });
    });
    filters.on("value", snapshot => {
      this.setState({
        filters: snapshot.val()
      });
    });
  }

  selectedListItem = filter => {
    const books = this.state.books;
    const newBooksList = books.filter(book => {
      return book.category === filter || book.age === filter;
    });

    this.setState({
      filteredBooks: newBooksList,
      activeFilters: filter
    });
  };

  render() {
    const { filters, filteredBooks } = this.state;

    return (
      <div className="app">
        <div className="main-title">
          <h1>Choisissez un livre jeu pour commencer l'expérience.</h1>
        </div>
        <div className="row">
          <div className="col-md-2">
            <Filters
              filters={filters}
              selectedListItem={this.selectedListItem}
            />
          </div>
          <div className="col-md-10">
            <ul className="books-list">
              {Object.keys(filteredBooks).map((key, index) => {
                return <Book key={index} book={filteredBooks[key]} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
