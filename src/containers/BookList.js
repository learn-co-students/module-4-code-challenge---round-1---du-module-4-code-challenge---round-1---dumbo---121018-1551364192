import React, { Component } from "react";
import Book from "../components/Book";
import Search from "../components/Search";

class BookList extends Component {
  state = {
    bookList: [],
    searchWord: "",
    filteredList: []
  };

  componentDidMount() {
    fetch("http://localhost:3005/books")
      .then(res => res.json())
      .then(books => {
        this.setState({
          bookList: books,
          filteredList: books
        });
      });
  }

  onChangeHandler = e => {
    const word = e.target.value.toLowerCase();

    let filtered = [...this.state.bookList].filter(book =>
      book.title.toLowerCase().includes(word)
    );

    this.setState({
      searchWord: word,
      filteredList: filtered
    });
  };

  render() {
    const listBooks = [...this.state.filteredList].map(book => (
      <Book
        key={book.id}
        book={book}
        addToShelfClickHandler={this.props.addToShelfClickHandler}
      />
    ));

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Search
          onChangeHandler={this.onChangeHandler}
          value={this.state.searchWord}
        />
        <ul>{listBooks}</ul>
      </div>
    );
  }
}

export default BookList;
