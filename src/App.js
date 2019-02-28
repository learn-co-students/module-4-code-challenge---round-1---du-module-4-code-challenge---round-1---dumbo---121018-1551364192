import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
const URL = 'http://localhost:3005/books'
class App extends Component {

state ={
  books: [],
  filteredBooks:[],
  searchTerm: ""
}



componentDidMount (){
  fetch(URL)
  .then(resp => resp.json())
  .then(books => this.setState({books}))
}

changeHandler= ()=>{

}



clickHandler= ()=>{

}



  render() {
    return (
      <div className="book-container">
        <BookList books ={this.state.books}/>
        <Bookshelf />
      </div>
    );
  }
}

export default App;
