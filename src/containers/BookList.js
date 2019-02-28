import React, { Component } from "react";
import Book from "../components/Book";
import Search from "../components/Search";

class BookList extends Component {
  state = {
    books: [],
    filteredBooks: [],
    searchTerm: ""
  }

  componentDidMount = () => {
    fetch("http://localhost:3005/books")
    .then(res => res.json())
    .then(data => {
      this.setState({
        books: data,
        filteredBooks: [...data]
      })
    })
  }

  changeHandler = event => {
    const newFilteredBooks = [...this.state.books].filter(book => book.title.toLowerCase().includes(event.target.value.toLowerCase()))

    this.setState({
      searchTerm: event.target.value,
      filteredBooks: newFilteredBooks
    }, () => console.log(this.state))
  }

  formatBooksToComponents = () => {
    // const newFilteredBooks = [...this.state.books].filter(book => book.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    return this.state.filteredBooks.map(book => <Book book={book} clickHandler={this.props.clickHandler}/>)
  }

  render() {
    // console.log(this.state.books);
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Search value={this.state.searchTerm} changeHandler={this.changeHandler}/>
        <ul>{this.formatBooksToComponents()}</ul>
      </div>
    );
  }
};

export default BookList;
