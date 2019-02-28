import React from "react";

const Book = props => {
  let { book, clickHandler } = props;
  // console.log("from book", props.bookShelf)


  return (
    // rendered each book
    <div onClick={() => clickHandler(book)}>
      <h2>{book.title}</h2>
      <img src={book.img} alt=":(" />
    </div>
  );
};

export default Book;
