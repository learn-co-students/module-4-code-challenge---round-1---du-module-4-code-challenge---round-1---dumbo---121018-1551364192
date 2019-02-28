import React from "react";

const Book = props => {
  let { book, clickHandler } = props;
  return (
    <div onClick={() => clickHandler(book)}>
      <h2>{book.title}</h2>
      <img src={book.img} alt="book" />
    </div>
  );
};

export default Book;
