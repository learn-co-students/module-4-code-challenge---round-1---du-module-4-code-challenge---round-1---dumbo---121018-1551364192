import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  // console.log("from bookShelf", props.bookShelf)

  const deleteBook = () => {
    console.log("hi")
  }

  const createBook = () => { // this is creating my books
    // get back to this to make it unique
    return props.bookShelf.map(book => {
      return <Book key={book.id} book={book} clickHandler={() => props.clickHandler(book) } bookShelf={props.bookShelf} />
    })
  }

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{createBook()}</ul>
    </div>
  );
};

export default Bookshelf;
