import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state={
    shelvedBooks: []
  }

  addBook = (book) => {
    const updatedShelf = [...this.state.shelvedBooks, book]
    !this.state.shelvedBooks.includes(book) && this.setState({ shelvedBooks: updatedShelf})
  }

  removeBook = (badBook) => {
    const updatedShelf = this.state.shelvedBooks.filter(book => book !== badBook )
    this.setState({ shelvedBooks: updatedShelf})
  }

  render() {
    return (
      <div className="book-container">
        <BookList clickHandler={this.addBook}/>
        <Bookshelf clickHandler={this.removeBook} books={this.state.shelvedBooks}/>
      </div>
    );
  }
}

export default App;
