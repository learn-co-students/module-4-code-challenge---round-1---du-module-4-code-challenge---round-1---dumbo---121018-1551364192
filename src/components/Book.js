import React from "react";

const Book = (props) => {
  let { title, clickHandler } = props;
  return (
    <div>
      <h2>{props.title}</h2>
      {props.img}
    </div>
  );
};

export default Book;
