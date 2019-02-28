import React from "react";

const Search = props => {
  let { value, changeHandler } = props;
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Title"
        onChange={e => changeHandler(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default Search;
