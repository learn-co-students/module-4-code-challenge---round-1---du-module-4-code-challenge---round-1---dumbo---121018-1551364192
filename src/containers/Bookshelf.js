import React from "react";
import Book from "../components/Book";

const Bookshelf = (props) => {
  console.log(props.clickedBook)
  let book = props.clickedBook.map((book) =>{
    console.log(book,props)
    return <Book  onClick={() =>props.onClick(book)} key={book.id}title={book.title} img={book.img}/>
  })
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{book}</ul>
    </div>
  );
};

export default Bookshelf;
