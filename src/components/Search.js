import React from "react";

const Search = props => {
  let { value, changeHandler } = props;
  // console.log("search", props.books)
  return <input type="text" placeholder="Search here..." onChange={changeHandler} value={props.searching} />;
};

export default Search;
