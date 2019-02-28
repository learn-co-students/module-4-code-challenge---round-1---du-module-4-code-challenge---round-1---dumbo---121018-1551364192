import React from "react";
import Book from "../components/Book";

const Bookshelf = (props) => {
	// console.log('Bookshelf', props.removeBookFromShelf);
	let currentShelvedBooks = props.bookshelf.map(shelved => <Book key={shelved.id} book={shelved} clickHandler={(e) => props.removeBookFromShelf(e, shelved)} />)
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{currentShelvedBooks}</ul>
    </div>
  );
};

export default Bookshelf;
