import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    books: [],
    bookShelf: [],
    searchTerm: ""
  };

  componentDidMount() {
    fetch("http://localhost:3005/books")
      .then(res => res.json())
      .then(books => this.setState({ books }));
  }

  clickHandler = bookObj => {
    if (!this.state.bookShelf.find(book => bookObj.id === book.id)) {
      this.setState({ bookShelf: [...this.state.bookShelf, bookObj] });
    }
  };

  shelfClickHandler = bookObj => {
    let removed = this.state.bookShelf.filter(book => book.id !== bookObj.id);
    this.setState({ bookShelf: removed });
  };

  searchHandler = e => {
    this.setState({ searchTerm: e });
  };

  render() {
    // console.log(this.state.bookShelf)
    return (
      <div className="book-container">
        <BookList
          books={this.state.books}
          clickHandler={this.clickHandler}
          value={this.state.searchTerm}
          searchHandler={this.searchHandler}
        />
        <Bookshelf
          books={this.state.bookShelf}
          clickHandler={this.shelfClickHandler}
          value={this.state.searchTerm}
        />
      </div>
    );
  }
}

export default App;
