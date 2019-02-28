import React from "react";

const Search = props => {
  let { value, changeHandler } = props;
  return (<div>
		<input onChange={changeHandler} value={value} type="text"/>
		</div>)
};

export default Search;
