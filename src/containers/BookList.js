import React, { Component } from "react";
import Book from "../components/Book";
import Search from "../components/Search";

const BookList = (props) => {
  let bookList = props.books.map(book => <Book book ={book} key={book.id} e ={'e'}/>)
console.log('Props',props.books);//list of books
  return (
    <div className="book-list">
      <h1>Book List</h1>
      <ul>{bookList}</ul>
    </div>
  );
};

export default BookList;
