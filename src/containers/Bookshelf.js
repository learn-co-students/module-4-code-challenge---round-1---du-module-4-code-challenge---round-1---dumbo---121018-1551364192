import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  let bookshelfRender = () =>
    props.books.map(book => (
      <Book book={book} key={book.id} clickHandler={props.clickHandler} />
    ));

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{bookshelfRender()}</ul>
    </div>
  );
};

export default Bookshelf;
