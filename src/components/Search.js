import React from "react";

const Search = props => {
  let { value, changeHandler } = props;
  return <div><input type="text" onChange={changeHandler} value={value}/></div>;
};

export default Search;
