import React, { Component } from "react";
import Book from "../components/Book";
import Search from "../components/Search";

class BookList extends Component {
  state = {
    books: [],
    filteredBooks: [],
    value: ''
  }

  changeHandler = (e) => {
    this.setState({
      value: e.target.value,
      filteredBooks: this.state.books.filter(book => {
        return book.title.toLowerCase().includes(e.target.value.toLowerCase())
      })
    })
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
      .then(res => res.json())
      .then(books => this.setState({books, filteredBooks: books}))
  }

  render() {
    let books = this.state.filteredBooks.map(book => (
        <li key={book.id}>
          <Book
            key={book.id}
            book={book}
            clickHandler={this.props.clickHandler}/>
        </li>
      )
    )
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Search changeHandler={this.changeHandler}/>
        <ul>{books}</ul>
      </div>
    )
  }
}

export default BookList;
