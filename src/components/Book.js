import React from "react";

const Book = (props) => {
  let { book, clickHandler } = props;
  console.log('PROPS',props.book.title);



  return (
    <div>
      <h2>{props.book.title}</h2>
      <img alt ="" src= {props.book.img}/>
    </div>
  );
};

export default Book;
