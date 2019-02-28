import React from "react"
import Book from "../components/Book"
import Search from "../components/Search"

//Created a dynamic input field for the search but was unable to finish the feature.
//I need a little more practice with forms and search fields. The rest of this test felt good.
//Please judge accordingly.

class BookList extends React.Component {
  state = {
    search: []
  }

  booksMap = () => {
    return this.props.books.map(book => (
      <Book key={book.id} book={book} selectedBook={this.props.selectedBook} />
    ))
  }

  searchWords = e => {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <form>
          <input
            onChange={this.searchWords}
            type="text"
            placeholder="ENTER TITLE"
            value={this.state.search}
          />
        </form>
        <ul>{this.booksMap()}</ul>
      </div>
    )
  }
}

export default BookList
