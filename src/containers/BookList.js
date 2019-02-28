import React, { Component } from "react";
import Book from "../components/Book";
import Search from "../components/Search";

const BookList = (props) => {

  let bookList = props.books.map(bookObj => {
    return <Book key={bookObj.id} book={bookObj} handler={props.handler} clicked={props.clicked.value}/>
  })

  return (
    <div className="book-list">
      <h1>Book List</h1>
      <Search changeHandler={props.changeHandler}/>
      <ul>{bookList}</ul>
    </div>
  );
};

export default BookList;
