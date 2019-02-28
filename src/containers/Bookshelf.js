import React from "react";
import Book from "../components/Book";

const Bookshelf = (props) => {
  const listOfBooks = props.myBooks.map(book => <Book clickHandler={
    (event, bookObj) => {
    props.fromShelfClickHandler(event, bookObj);
  }} key={book.id} bookObj={book} />)
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{listOfBooks}</ul>
    </div>
  );
};

export default Bookshelf;
