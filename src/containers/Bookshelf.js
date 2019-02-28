import React from "react";
import Book from "../components/Book";

class Bookshelf extends React.Component {

  render() {
    // console.log('favorited')
    // console.log(this.props)
    let arrayOfBooks = this.props.book.map((book) => {
      return <Book key={book.id} book={book} shelvedBook={this.props.shelvedBook} />
    })

    return (
      <div className="shelved">
        <h1>Book Shelf</h1>
        <ul>{arrayOfBooks}</ul>
      </div>
    );
  }
}

export default Bookshelf
