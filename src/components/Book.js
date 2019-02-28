import React from "react";

const Book = props => {
  let {clickHandler } = props
  let {title, img} = props.book
  return (
    <div onClick={() => clickHandler(props.book)}>
      <h2>{title}</h2>
        <img src={img} alt="" />
    </div>
  );
};

export default Book;
