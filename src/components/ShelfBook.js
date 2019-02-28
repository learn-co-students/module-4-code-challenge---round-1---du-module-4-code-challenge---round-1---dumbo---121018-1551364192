import React from "react";

const shelfBook = props => {
  //I apologize in advance that I created a new component.
  let { title, img } = props.book;
  return (
    <div onClick={() => props.removeShelfClickHandler(props.book)}>
      <h2>{title}</h2>
      <img src={img} alt="book" />
    </div>
  );
};

export default shelfBook;
