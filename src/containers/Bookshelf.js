import React from "react";
import Book from "../components/Book";

const Bookshelf = (props) => {

  let clickedBookObjects = props.books.filter(book =>{
    return book.clicked === true
  })

  // let clickedBookObjects = props.books.forEach(book =>{
  //   if (book.clicked === true) {
  //     return true
  //   } else {
  //     return false
  //   }
  // })

  let clickedBooks = clickedBookObjects.map(book => {
    return <Book book={book} clicked={props.clicked}/>
  })

  // console.log(props.clicked)

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.clicked === true ? clickedBooks : null}</ul>
    </div>
  );
};

export default Bookshelf;
