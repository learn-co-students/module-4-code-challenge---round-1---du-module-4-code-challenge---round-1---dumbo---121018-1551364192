import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    clickedBook: []
  }
  componentDidMount(){
    fetch("http://localhost:3005/books")
    .then(res => res.json())
    .then(books => this.setState({
      books: books
    }))
  }
  clickHandler = (val) => {
    console.log('in app again', val)
    this.setState({
      clickedBook: [...this.state.clickedBook, val]
    })
  }
  // fetch complete 1
  render() {
    // check for fetch value
    console.log(this.state)

    return (
      <div className="book-container">
        
        <BookList onClick={this.clickHandler}books={this.state.books}/>
       
        <Bookshelf clickedBook={this.state.clickedBook}/>
      </div>
    );
  }
}

export default App;
