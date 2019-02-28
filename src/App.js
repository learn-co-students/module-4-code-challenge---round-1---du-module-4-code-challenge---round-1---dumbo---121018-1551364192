import React, { Component } from "react"
import "./App.css"
import BookList from "./containers/BookList"
import Bookshelf from "./containers/Bookshelf"

class App extends Component {
  state = {
    books: [],
    shelfBooks: []
  }

  componentDidMount() {
    let API = "http://localhost:3005/books"

    fetch(API)
      .then(res => res.json())
      .then(books => this.setState({ books }))
  }

  selectedBook = bookObj => {
    let bookClone = this.state.shelfBooks.find(book => book.id === bookObj.id)
    if (!bookClone) {
      this.setState({
        shelfBooks: [...this.state.shelfBooks, bookObj]
      })
    }
  }

  bookRemove = bookObj => {
    this.setState({
      shelfBooks: this.state.shelfBooks.filter(book => book.id !== bookObj.id)
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} selectedBook={this.selectedBook} />
        <Bookshelf
          shelfBooks={this.state.shelfBooks}
          selectedBook={this.bookRemove}
        />
      </div>
    )
  }
}

export default App
