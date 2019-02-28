import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    filteredBooks: [],
    clicked: false,
    searchTerm: ""
  }

  componentDidMount() {
    fetch("http://localhost:3005/books")
      .then(res => res.json())
      .then(books => this.setState({
        books: books,
        filteredBooks: books
      }))
  }

  clickHandler = (event) => {
    if (this.state.clicked === false) {
      this.setState({
        clicked: !this.state.clicked
      })
    } else {
      this.setState({
        clicked: !this.state.clicked
      })
    }
  }

  changeHandler = (event) => {
    let newArr = this.state.books.filter(book => {
      return book.title.toLowerCase().includes(event.target.value.toLowerCase())
    })

    this.setState({
      searchTerm: event.target.value,
      filteredBooks: newArr
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.filteredBooks} handler={this.clickHandler} clicked={this.state.clicked} changeHandler={this.changeHandler}/>
        <Bookshelf books={this.state.books} clicked={this.state.clicked}/>
      </div>
    );
  }
}

export default App;
