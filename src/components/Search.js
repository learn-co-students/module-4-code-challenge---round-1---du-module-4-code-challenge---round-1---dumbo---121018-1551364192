import React from "react";

const Search = props => {
  let { value, changeHandler } = props;

  return <div>
      <form>
        <input
        className="form"
        type="text"
        value={ value }
        onChange={ changeHandler }
        placeholder={"Search Books"}
        />
      </form>
  </div>;
};

export default Search;
