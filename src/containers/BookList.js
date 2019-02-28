import React, { Component } from "react";
import Book from "../components/Book";
import Search from "../components/Search";

const BookList = (props) => {
  let allBookList = props.allBooks.map(oneBook => <Book key={oneBook.id} clickHandler={props.clickHandler}book={oneBook}/>)
  // console.log(props.searchHandler)
  return (
    <div className="book-list">
      <h1>Book List</h1>
      <Search searchTerm={props.searchTerm} changeHandler={props.searchHandler}/>
      <ul>{allBookList}</ul>
    </div>
  );
};

export default BookList;
