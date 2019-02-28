import React from "react";

const Search = props => {
  let { value, changeHandler } = props;

  const noDefault = e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={noDefault}>
      <input type="text" value={value} onChange={changeHandler}/>
    </form>
  );
};

export default Search;
