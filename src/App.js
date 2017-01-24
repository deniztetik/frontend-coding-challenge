import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { EventList } from './EventList';
import 'whatwg-fetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    const that = this;
    fetch('https://api.eventable.com/v1/events/', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 7761e7e3b25a1d6d315901fcd7180d971f77ea2e'
      }
    })
      .then(response => response.json())
      .then(({results}) => results)
      .then(events => that.setState({events,}));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

export default App;
