import React from "react";

const Book = props => {
  // let { book, clickHandler } = props;
  return (
    <div onClick={event => props.clickHandler(event, props.bookObj)}>
      <h2>{props.bookObj.title}</h2>
      <img alt="" src={props.bookObj.img} />
    </div>
  );
};

export default Book;
