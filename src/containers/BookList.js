import React, { Component } from "react";
import Book from "../components/Book";
import Search from "../components/Search";

const BookList = props => {
  const { books, clickHandler, changeHandler } = props

  console.log(books);
  return (
    <div className="book-list">
      <h1>Book List</h1>
      <Search changeHandler= { changeHandler }/>
      <ul>{books.map(book => (
        <Book key={ book.id }
        book={ book }
        clickHandler={ clickHandler }/>))}</ul>
    </div>
  );
};

export default BookList;
