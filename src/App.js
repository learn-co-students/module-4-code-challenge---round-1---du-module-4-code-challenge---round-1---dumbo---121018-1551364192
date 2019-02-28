import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    myShelf: []
  }

  deletionClickHandler = bookObj => {
    const newShelf = this.state.myShelf.filter(book => book.id !== bookObj.id)
    this.setState({
      myShelf: newShelf
    })
  }

  clickHandler = bookObj => {
    if (!this.state.myShelf.includes(bookObj)) {
      this.setState({
        myShelf: [...this.state.myShelf, bookObj]
      })
    }
  }

  render() {
    return (
      <div className="book-container">
        <BookList clickHandler={this.clickHandler} />
        <Bookshelf myShelf={this.state.myShelf} deletionClickHandler={this.deletionClickHandler}/>
      </div>
    );
  }
}

export default App;
