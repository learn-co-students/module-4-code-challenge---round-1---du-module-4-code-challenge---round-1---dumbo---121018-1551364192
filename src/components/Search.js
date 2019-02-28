import React from "react";

const Search = props => {
  let { value, changeHandler } = props;
  return (<div>
	  <input type="text" placeholder="Enter Title" onChange={changeHandler} value={value}/>
  </div>)
};

export default Search;
