import React from "react";
import "./App.css";
import Filter from "./Filter";
import Book from "./Book";
import config from "./config";
import firebase from "firebase";

class App extends React.Component {
  constructor() {
    super();
    firebase.initializeApp(config);
    this.state = {
      books: "",
      filters: "",
      filteredBooks: ""
    };
    this.selectedFilter = this.selectedFilter.bind(this);
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

  selectedFilter = filter => {
    const books = this.state.books.filter(book => {
      return book.category === filter || book.age === filter;
    });

    this.setState({
      filteredBooks: books
    });
  };

  render() {
    const { filteredBooks } = this.state;

    return (
      <div className="app">
        <div className="main-title">
          <h1>Choisissez un livre jeu pour commencer l'expérience.</h1>
        </div>
        <div className="row">
          <div className="col-md-2">
            {Object.values(this.state.filters).map((filter, key) => {
              return (
                <Filter
                  key={key}
                  filter={filter}
                  selectedFilter={this.selectedFilter}
                />
              );
            })}
          </div>
          <div className="col-md-10">
            <ul className="books-list">
              {Object.keys(filteredBooks).map(key => {
                return <Book key={key} filteredBook={filteredBooks[key]} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
