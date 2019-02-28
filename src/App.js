import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Search from "./components/Search";
const URL = 'http://localhost:3005/books'
class App extends Component {

state ={
  books: [],
  filteredBooks:[],
  searchTerm: "",
  clicked: false
}



componentDidMount (){
  fetch(URL)
  .then(resp => resp.json())
  .then(books => this.setState({books}))
}

changeHandler = e =>{
  let newArray = [...this.state.books].filter(book =>
    book.title.includes(e.target.value)
  );
  this.setState({
searchTerm: e.target.value,
filteredBooks: newArray
});

}





  render() {
    return (
      <div className="book-container">
        <BookList clickHandler = {this.clickHandler} books ={this.state.books}/>
        <Bookshelf />
        <Search changeHandler={this.changeHandler}/>
      </div>
    );
  }
}

export default App;
