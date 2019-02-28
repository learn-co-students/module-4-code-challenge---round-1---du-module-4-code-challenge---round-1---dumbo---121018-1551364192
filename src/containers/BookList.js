import React, { Component } from "react";
import Book from "../components/Book";
import Search from "../components/Search";

class BookList extends Component {
  // console.log("from booklist:", props.books)

  state = {
    searching: ""
  }

  createBook = () => { // this is creating my books
    // search complete but needs refactoring, short on time
    const filteredBooks = this.props.books.filter(book => {
      if(book.title.toLowerCase().includes(this.state.searching.toLowerCase())) {
        return book.title
      }
    })

    if(this.state.searching == false) {
      return this.props.books.map(book => {
        return <Book key={book.id} book={book} clickHandler={() => this.props.clickHandler(book)} />
      })
    } else {
      return filteredBooks.map(book => {
        return <Book key={book.id} book={book} clickHandler={() => this.props.clickHandler(book)} />
      })
    }
  }

  changeHandler = event => {
    // console.log(event.target.value)
    this.setState({
      searching: event.target.value
    })
  }

  filterBooks = () => {
    this.props.books.filter(book => {
      if(book.title.includes(this.state.searching)) {
        return book.title
      }
    })
  }



  render() {
    // console.log("searching from the booklist", this.state.searching)
  return (
    <div className="book-list">
      <h1>Book List</h1>
      <Search books={this.props.books} changeHandler={this.changeHandler} searching={this.state.searching} />
      <ul>{this.createBook()}</ul>
    </div>
  );
  }
};

export default BookList;
