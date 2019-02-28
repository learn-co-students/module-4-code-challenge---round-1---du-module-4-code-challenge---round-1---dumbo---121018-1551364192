import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    allBooks: [],
    bookShelf: [],
    searchTerm: ""
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(data => this.setState({
      allBooks: data
    }))
  }

  addClickHandler = (bookObj) =>{
    if (!this.state.bookShelf.includes(bookObj)){
      this.setState({
        bookShelf: [...this.state.bookShelf, bookObj]
      })
    }
  }

  removeClickHandler = (bookObj) =>{
    let newBookShelfArray = this.state.bookShelf.filter(oneBook => {
      return oneBook !== bookObj
    })
    this.setState({
      bookShelf: newBookShelfArray
    })
  }

  searchHandler = (event) =>{
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    //Filter the books with search term
    let filteredBooks = this.state.allBooks.filter(oneBook =>{
      return oneBook.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })

    return (
      <div className="book-container">
        <BookList allBooks={filteredBooks} searchTerm={this.state.searchTerm} searchHandler={this.searchHandler} clickHandler={this.addClickHandler}/>
        <Bookshelf bookShelf={this.state.bookShelf} clickHandler={this.removeClickHandler}/>
      </div>
    );
  }
}

export default App;
