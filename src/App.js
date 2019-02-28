import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: []
  }
  componentDidMount(){
    fetch("http://localhost:3005/books")
    .then(res => res.json())
    .then(books => this.setState({
      books: books
    }))
  }
  // fetch complete 1
  render() {
    // check for fetch value
    console.log(this)
    return (
      <div className="book-container">
        <BookList />
        <Bookshelf />
      </div>
    );
  }
}

export default App;
