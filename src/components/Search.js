import React from "react";

const Search = props => {
  let { value } = props;
  return (
    <div>
      <input
        value={value}
        placeholder="Search Book"
        onChange={e => props.onChangeHandler(e)}
      />
    </div>
  );
};

export default Search;
