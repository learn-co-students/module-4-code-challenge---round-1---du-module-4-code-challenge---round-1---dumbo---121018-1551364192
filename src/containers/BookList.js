import React, { Component } from "react";
import Book from "../components/Book";
import Search from "../components/Search";

class BookList extends Component {
  state ={
    books: [],
    searchValue: "",
    displayedBooks: []
  }

  componentDidMount(){
    fetch('http://localhost:4000/books')
    .then(res => res.json())
    .then(books => this.setState({ books, displayedBooks: books }))
  }

  changeHandler = (e) => {
    this.setState({ searchValue: e.target.value })
    const bookSearch = this.state.books.filter(book => book.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    this.setState({ displayedBooks: bookSearch })
  }


  render(){
    let books = this.state.displayedBooks.map(book => <Book key={book.id} book={book} clickHandler={this.props.clickHandler}/>)
    return (
      <div className="book-list">
        <h3>Search Books</h3>
        <Search books={this.state.books} value={this.state.searchValue} changeHandler={this.changeHandler}/>
        <h1>Book List</h1>
        <ul>{books}</ul>
      </div>
    );
  }
};

export default BookList;
