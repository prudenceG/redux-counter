import React, { Component } from 'react';
import './App.css';
import CounterComponent from './counterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Compteur Redux</h1>
        <CounterComponent/>
      </div>
    );
  }
}

export default App;
