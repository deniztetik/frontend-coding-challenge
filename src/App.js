import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { EventList } from './EventList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <EventList/>
      </div>
    );
  }
}

export default App;
