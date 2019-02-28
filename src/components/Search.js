import React from "react";

const Search = props => {
  let { value, changeHandler } = props;
  return <div>
        <form>
       <input
         placeholder="Search for..."

         onChange={props.changeHandler}
       />

     </form></div>;
};

export default Search;
