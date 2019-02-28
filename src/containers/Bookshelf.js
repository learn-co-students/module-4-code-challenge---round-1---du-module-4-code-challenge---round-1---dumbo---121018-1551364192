import React from "react";
import ShelfBook from "../components/ShelfBook";

const Bookshelf = props => {
  const listBooks = props.books.map(book => (
    <ShelfBook
      key={book.id}
      book={book}
      removeShelfClickHandler={props.removeShelfClickHandler}
    />
  ));
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{listBooks}</ul>
    </div>
  );
};

export default Bookshelf;
