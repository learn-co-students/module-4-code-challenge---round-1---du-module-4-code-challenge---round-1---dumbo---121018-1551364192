import React from "react";

const Search = props => {
  let { searchTerm, changeHandler } = props;
  return (<input type="text" onChange={changeHandler} value={searchTerm} name="search"/>)

};

export default Search;
