import React, { Component } from 'react';
import Navbar from  "./Navbar"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    test: "testing ",
    score: 10,
    topScore: 15

  }


  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <h1>baner</h1>
        <h1>grid</h1>
        <h1>footer</h1>
      </div>
    );
  }
}

export default App;
