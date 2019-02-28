import React, { Component } from "react";
import Book from "../components/Book";
import Search from "../components/Search";

const BookList = props => {
  let bookRender = () => {
    return props.books.map(book => (
      <Book book={book} key={book.id} clickHandler={props.clickHandler} />
    ));
  };

  let changeHandler = (value) => {
  	this.state.value
  };

  return (
    <div className="book-list">
      <h1>Book List</h1>
      <Search books={props.books} changeHandler={changeHandler} />

      <ul>{bookRender()}</ul>
    </div>
  );
};

export default BookList;
