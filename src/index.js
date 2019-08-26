import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'anonymous'
    }
  }

  handleClick = () => {
    this.setState({
      name: 'Bob Cobb'
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Welcome, {this.state.name}.</h2>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
  
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
