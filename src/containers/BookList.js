import React, { Component } from "react";
import Book from "../components/Book";
import Search from "../components/Search";

const BookList = props => {
  let bookRender = () => {
    return props.books
      .filter(book =>
        book.title.toLowerCase().includes(props.value.toLowerCase())
      )
      .map(book => (
        <Book book={book} key={book.id} clickHandler={props.clickHandler} />
      ));
  };

  let changeHandler = e => {
    props.searchHandler(e);
  };

  return (
    <div className="book-list">
      <h1>Book List</h1>
      <Search
        books={props.books}
        changeHandler={changeHandler}
        value={props.value}
      />

      <ul>{bookRender()}</ul>
    </div>
  );
};

export default BookList;
