import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    myBooks: [],
    search: ""
  }

  componentDidMount(){
    fetch("http://localhost:3005/books")
    .then(res => res.json())
    .then(data => {
      this.setState({
        books: data
      })
    });
  }

  clickHandler = (event, bookObj) => {
    if (!this.state.myBooks.includes(bookObj)){
      this.setState({
        myBooks: [...this.state.myBooks, bookObj]
      })
    }
  }

  fromShelfClickHandler = (event, bookObj) => {

    const filtered = this.state.myBooks.filter(book => {return book.id !== bookObj.id})

    this.setState({
      myBooks: filtered
    })

  }

  searchHandler = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {

    return (
      <div className="book-container">
        <BookList searchHandler={this.searchHandler} searchTerm={this.state.search} clickHandler={this.clickHandler} books={this.state.books}/>
        <Bookshelf fromShelfClickHandler={this.fromShelfClickHandler} myBooks={this.state.myBooks}/>
      </div>
    );
  }
}

export default App;
