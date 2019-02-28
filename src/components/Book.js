import React from "react";

const Book = props => {
  let { book, clickHandler } = props;
	// console.log("Book", book);
  return (
    <div>
      <h2>{book.title}</h2>
      <img onClick={(e) => clickHandler(e, book)} alt="" src={book.img}/>
    </div>
  );
};

export default Book;
