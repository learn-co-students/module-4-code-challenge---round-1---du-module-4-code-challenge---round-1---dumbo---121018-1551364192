import React from "react";
import Book from "../components/Book";

const Bookshelf = (props) => {
  let faves = props.favorites.map(fave => {
    return (
      <li key={fave.id}>
        <Book
          key={fave.id}
          book={fave}
          clickHandler={props.clickHandler}/>
      </li>
    )
  })
  return (
    <div className='book-shelf'>
      <h1>Book Shelf</h1>
      <ul>{faves}</ul>
    </div>
  )
};

export default Bookshelf;
