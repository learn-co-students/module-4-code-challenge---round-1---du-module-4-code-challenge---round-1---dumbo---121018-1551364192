import React from "react";

class Book extends React.Component {

  handleClick = (e) => {
    e.preventDefault()
    let id = e.target.dataset.id
    this.props.shelvedBook(id)
  }

  render () {
    console.log(this.props.book.title)
    return(
      <div className="bookTile">
        <h2>{this.props.book.title}</h2>
        <img data-id={this.props.book.id} onClick={this.handleClick} src={this.props.book.img} alt='' />
      </div>
    )
  }
}



export default Book;
