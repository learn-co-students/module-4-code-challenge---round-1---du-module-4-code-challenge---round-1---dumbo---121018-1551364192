import React from "react";

const Search = props => {
  // let { value, changeHandler } = props;
  return (
    <div>
    <input onChange={event => props.searchHandler(event)} value={props.searchTerm} type="text" placeholder="Enter Title"/>
    </div>
  );
};

export default Search;
