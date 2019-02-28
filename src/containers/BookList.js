import React, { Component } from "react";
import Book from "../components/Book";
import Search from "../components/Search";

class BookList extends React.Component {

  render() {
    // console.log(this.props)
    let arrayOfBooks = this.props.book.map((book)) => {
      return <Book key={book.id} book={book} shelvedBook={this.props.shelvedBook}/>
    })


    return (
      <div className="book-list">
        <h1>Book List</h1>
        <ul>{arrayOfBooks}</ul>
      </div>
    );
  }
}





export default BookList;
