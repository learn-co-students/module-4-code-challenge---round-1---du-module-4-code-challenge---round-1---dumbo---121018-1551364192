import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

	state = {
		books: [],
		bookshelf: []
	}

	componentDidMount() {
		fetch('http://localhost:3005/books')
		.then(res => res.json())
		.then(books => {
			this.setState({
				books
			})
		})
	}

	clickHandler = (e, book) => {
		// console.log("Clicked", book);
		let shelfBook = this.state.books.filter(aBook => aBook !== book )
		this.setState({
			books: shelfBook,
			bookshelf: [...this.state.bookshelf, book]
		})
	}

	removeBookFromShelf = (e, book) => {
		console.log("removed", book);
		let newShelf = this.state.bookshelf.filter(shelved => shelved !== book);
		let newBooks = [book,...this.state.books];

		this.setState({
			books: newBooks,
			bookshelf: newShelf,
			searchInput: ''
		})
	}

	changeHandler = (e) => {
		// let filteredBooks = [...this.state.books].filter(book => book.includes(e.target.value));
		console.log(e.target.value);
		this.setState({
			searchInput: e.target.value
		})

		// have to write a conditional if e.target.value is not = 0 set the state of books to filteredBooks
		// if (e.target.value !== 0) {
		// 	this.setState({
		// 		books: filteredBooks
		// 	})
		// }

	}

  render() {
		// console.log(this.state.books);
    return (
      <div className="book-container">
        <BookList books={this.state.books} clickHandler={this.clickHandler} value={this.state.searchInput} changeHandler={this.changeHandler}/>
        <Bookshelf bookshelf={this.state.bookshelf} removeBookFromShelf={this.removeBookFromShelf}/>
      </div>
    );
  }
}

export default App;
