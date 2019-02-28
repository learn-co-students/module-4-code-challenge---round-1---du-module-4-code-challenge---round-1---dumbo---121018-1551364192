import React, { Component } from "react";
import Book from "../components/Book";
import Search from "../components/Search";

const BookList = (props) => {
	// console.log("BookList", props.books);


	let allBooks = props.books.map(book => <Book key={book.id} book={book} clickHandler={props.clickHandler} />);




  return (
    <div className="book-list">
			<Search value={props.searchInput} changeHandler={props.changeHandler}/>
      <h1>Book List</h1>
      <ul>{allBooks}</ul>
    </div>
  );
};

export default BookList;
