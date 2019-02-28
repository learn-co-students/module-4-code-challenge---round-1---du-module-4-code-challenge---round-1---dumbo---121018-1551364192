import React from "react";
import Book from "../components/Book";

const Bookshelf = (props) => {
  // console.log(props)
  let bookShelfList = props.bookShelf.map(oneBook => <Book key={oneBook.id} clickHandler={props.clickHandler} book={oneBook}/>)
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{bookShelfList}</ul>
    </div>
  );
};

export default Bookshelf;
