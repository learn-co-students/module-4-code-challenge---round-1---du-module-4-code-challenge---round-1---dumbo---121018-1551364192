import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import bookinfo from "./db.json"

class App extends Component {
  state = {
    book: bookinfo,
    query: ""
  }

  shelvedBook = (id) => {
    let otherBooks = [...this.state.book]
    let foundBook = otherBooks.find((book) => {
      return book.id == id
    })
    this.setState({
      book: otherBooks
    })
    // console.log(otherBooks)
  }

  searchTitle = () => {
    let searchedTitle = [...this.state.book]
    this.setState({
      query: this.search.value
    })
  }


  render() {
    let shelfbooks = [...this.state.book]
    // console.log(this.state.book)
    return (
      <div className="books-container">
        // <input type="text" className="search-input" onChange={this.searchTitle} placeholder="Search..." />
        <form>
          <input placeholder="Search title..." ref={input => this.search = input} onChange={this.handleInputChange}/>
          <p>{this.state.query}</p>
          <BookList book={this.state.book} shelvedBook={this.shelvedBook}/>
          <Bookshelf book={shelfbooks} shelvedBook={this.shelvedBook}/>
        </form>
      </div>
    );
  }
}

export default App;
