import React from "react";

const Book = props => {
  // console.log(props)
  let { book, clickHandler } = props;
  return (
    <div onClick={() => props.onClick(props)}>
      <h2>{props.title}</h2>
      <img alt='' src={props.img}/>
    </div>
  );
};

export default Book;
