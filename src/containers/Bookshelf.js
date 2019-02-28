import React from "react"
import Book from "../components/Book"

const Bookshelf = props => {
  let booksMap = props.shelfBooks.map(book => (
    <Book key={book.id} book={book} selectedBook={props.selectedBook} />
  ))

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{booksMap}</ul>
    </div>
  )
}

export default Bookshelf
