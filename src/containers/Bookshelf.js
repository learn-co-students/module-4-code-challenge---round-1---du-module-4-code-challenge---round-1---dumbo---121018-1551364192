import React from "react";
import Book from "../components/Book";

const Bookshelf = ({myShelf, deletionClickHandler}) => {
  const formatBooksToComponents = () => {
    return myShelf.map(book => <Book book={book} clickHandler={deletionClickHandler}/>)
  }

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{formatBooksToComponents()}</ul>
    </div>
  );
};

export default Bookshelf;
