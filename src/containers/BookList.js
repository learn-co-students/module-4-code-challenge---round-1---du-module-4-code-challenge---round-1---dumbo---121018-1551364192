import React, { Component } from "react";
import Book from "../components/Book";
import Search from "../components/Search";

const BookList = (props) => {
console.log(props.books)
let clickHandler = (val) =>{
  console.log('clicked',val)
  props.onClick(val)
}
let List = props.books.map((book) => {
  return <Book onClick={clickHandler}title={book.title} img={book.img}key={book.id}/>
})
  return (
    <div className="book-list">
      <h1>Book List</h1>
      <ul>{List}</ul>
    </div>
  );
};

export default BookList;
