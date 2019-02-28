import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    favorites: []
  }

  faveClickHandler = (book) => {
    let newFavorites = []
    let isFave = !!this.state.favorites.find(fave => fave.id === book.id)
    if (isFave) {
      newFavorites = [...this.state.favorites]
    } else {
      newFavorites = [book, ...this.state.favorites]
    }
    this.setState({
      favorites: newFavorites
    })
  }

  unfaveClickHandler = (book) => {
    let newFavorites = this.state.favorites.filter(fave => fave.id !== book.id)
    this.setState({
      favorites: newFavorites
    })
  }
  render() {
    return (
      <div className="book-container">
        <BookList clickHandler={this.faveClickHandler}/>
        <Bookshelf favorites={this.state.favorites} clickHandler={this.unfaveClickHandler}/>
      </div>
    );
  }
}

export default App;
