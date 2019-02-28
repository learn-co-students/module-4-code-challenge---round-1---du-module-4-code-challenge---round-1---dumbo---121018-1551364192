import React, { Component } from "react";
import Book from "../components/Book";
import Search from "../components/Search";

const BookList = (props) => {
  const listOfBooks = props.books.filter(book => book.title.toLowerCase().includes(props.searchTerm))
  .map(book => <Book key={book.id} clickHandler={props.clickHandler} bookObj={book} />)
  return (

    <div className="book-list">
      <h1>Book List</h1>
      <Search searchTerm={props.searchTerm} searchHandler={props.searchHandler}/>
      <ul>{listOfBooks}</ul>
    </div>

  );
};

export default BookList;
