import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    shelfBook: [],
    filteredBooks: []
  };

  addToShelfClickHandler = bookObj => {
    this.setState({
      shelfBook: [...this.state.shelfBook, bookObj]
    });
  };

  removeShelfClickHandler = bookObj => {
    // console.log(bookObj);
    let filtered = [...this.state.shelfBook].filter(
      book => book.id !== bookObj.id
    );
    this.setState({
      shelfBook: filtered
    });
  };

  render() {
    return (
      <div className="book-container">
        <BookList addToShelfClickHandler={this.addToShelfClickHandler} />
        <Bookshelf
          books={this.state.shelfBook}
          removeShelfClickHandler={this.removeShelfClickHandler}
        />
      </div>
    );
  }
}

export default App;
