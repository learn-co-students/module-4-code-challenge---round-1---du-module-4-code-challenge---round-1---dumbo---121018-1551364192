import React from "react";

const Search = props => {
  let { value, changeHandler } = props;
  return (
    <div>
      <input type="text" name="book" value={value} onChange={changeHandler} placeholder="Search"/>
    </div>
  )
};

export default Search;
