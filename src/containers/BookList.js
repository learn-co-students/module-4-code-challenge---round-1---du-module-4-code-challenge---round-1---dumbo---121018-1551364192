import React, { Component } from "react";
import Book from "../components/Book";
import Search from "../components/Search";


class App extends Component {




  render() {
    let bookList = this.props.books.map(book => <Book key={book.id}/>);

    return (

        <div className="book-list">
          <h1>Book List</h1>
          <ul>{bookList}</ul>
        </div>
      );
  }
}

export default App;
