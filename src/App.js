import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    clickedBook: [],
    removedBook: []
  }
  componentDidMount(){
    fetch("http://localhost:3005/books")
    .then(res => res.json())
    .then(books => this.setState({
      books: books
    }))
  }
  clickHandler = (val) => {
    // console.log('in app again', val)
    console.log()
    this.setState({
      clickedBook: [...this.state.clickedBook, val]
    })
    }
    clickHandle = (book) => {
console.log('removing',book)

this.setState({
  removedBook: book
})
  }
  // fetch complete 1
  render() {
    // check for fetch value
    // console.log(this.state)

    return (
      <div className="book-container">
        
        <BookList onClick={this.clickHandler}books={this.state.books}/>
       
        <Bookshelf onClick={this.clickHandle}clickedBook={this.state.clickedBook}/>
      </div>
    );
  }
}

export default App;
