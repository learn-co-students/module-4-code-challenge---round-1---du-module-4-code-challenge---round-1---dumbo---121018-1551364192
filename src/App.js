import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    books: [],
    bookShelf: [],
    searchTerm: ""
  }

  componentDidMount = () => {
    fetch("http://localhost:3005/books")
    .then(r => r.json())
    .then(books => this.setState({ books }), console.log('you got this, g'))
  }

  clickHandler = bookObj => {
    console.log(bookObj, 'clicked');
    if(this.state.bookShelf.filter(book => book.id === bookObj.id).length === 0){
      this.setState({ bookShelf: [bookObj, ...this.state.bookShelf] })
    }
  }

  removeHandler = bookObj => {
    console.log('click');
    let filteredBooks = this.state.bookShelf.filter(book => book.id !== bookObj.id)
    this.setState({ bookShelf: filteredBooks })
  }

  changeHandler = e => {
    this.setState({ searchTerm: e.target.value })
    this.filterArray()
  }

  filterArray = () => {
    return this.state.books.filter(book =>
      book.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={ this.filterArray() } clickHandler={ this.clickHandler } changeHandler={ this.changeHandler }/>
        <Bookshelf books={ this.state.bookShelf } clickHandler={ this.removeHandler }/>
      </div>
    );
  }
}

export default App;
