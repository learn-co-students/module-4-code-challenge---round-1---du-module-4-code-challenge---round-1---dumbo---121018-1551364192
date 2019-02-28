import React from "react";

const Book = props => {
  let { book, handler, clicked} = props;

  return (
    <div onClick={handler} clicked={clicked}>
      <h2>{book.title}</h2>
      <img src={book.img} alt=""/>
    </div>
  );
};

export default Book;
