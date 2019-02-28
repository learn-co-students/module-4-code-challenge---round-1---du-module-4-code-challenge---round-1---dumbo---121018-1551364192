import React from "react";

const Search = props => {
  let { value, changeHandler } = props;
  return (
    <div>
      <input
        type='text'
        value={value}
        onChange={changeHandler}
        placeholder={'Enter Title'} />
    </div>
  )
}

export default Search;
