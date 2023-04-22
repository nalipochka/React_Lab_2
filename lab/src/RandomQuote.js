import React, { Component } from "react";

export default class RandomQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
    };
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          quote: data.content,
          author: data.author,
        });
      })
      .catch((error) => console.log(error));
  }

  handleClick = () => {
    this.getQuote();
  };

  render() {
    return (
      <div className="App">
        <div className="quote-container">
          <div className="quote-text">{this.state.quote}</div>
          <div className="quote-author">- {this.state.author}</div>
          <button className="quote-button" onClick={this.handleClick}>
            New Quote
          </button>
        </div>
      </div>
    );
  }
}
