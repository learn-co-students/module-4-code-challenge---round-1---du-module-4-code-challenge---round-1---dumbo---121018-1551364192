import React from "react"

const Book = props => {
  let { book, clickHandler } = props

  let clickBook = () => {
    return props.selectedBook(props.book)
  }

  return (
    <div>
      <h2>{props.book.title}</h2>
      <img onClick={clickBook} alt={props.book.title} src={props.book.img} />
    </div>
  )
}

export default Book
