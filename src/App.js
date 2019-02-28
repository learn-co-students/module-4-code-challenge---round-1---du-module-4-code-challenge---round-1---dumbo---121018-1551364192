import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    bookShelf: []
  }

  componentDidMount = () => { // got the initial fetch
    fetch("http://localhost:3005/books")
    .then(res => res.json())
    .then(books => {
      this.setState({
        books // fetch success, setState success
      })
    })
  }

  clickHandler = book => { // successfully passed the object up from Book.js
    // console.log(book)
    // on click add the book to the bookShelf for us
    // make condition here for no duplicates (gotcha)

    if(!this.state.bookShelf.includes(book)) {
      this.setState({
        bookShelf: [...this.state.bookShelf, book]
      })
    } else {
      this.state.bookShelf.shift()
      // was going to shift out the last one to remove if it already exist
    }
  }

  render() {
    // console.log(this.state.books)
    // console.log(this.state.bookShelf)
    return (
      <div className="book-container">
        <BookList books={this.state.books} clickHandler={this.clickHandler}/>
        <Bookshelf bookShelf={this.state.bookShelf} />
      </div>
    );
  }
}

export default App;
