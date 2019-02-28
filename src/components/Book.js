import React from "react";

const Book = props => {
  let { title, img } = props.book;
  return (
    <div onClick={e => props.addToShelfClickHandler(props.book)}>
      <h2>{title}</h2>
      <img src={img} alt="book" />
    </div>
  );
};

export default Book;
