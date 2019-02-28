import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  const { books, clickHandler } = props
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{books.map(book => (
        <Book key={ book.id } book={ book } clickHandler={ clickHandler }/>
      ))}</ul>
    </div>
  );
};

export default Bookshelf;
