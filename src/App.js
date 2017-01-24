import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { EventList } from './EventList';
import { SearchBar } from './Search/SearchBar';
import { CreateEvent } from './CreateEvent';
import 'whatwg-fetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allEvents: [],
      filteredEvents: [],
    };
    this.updateSearchResults = this.updateSearchResults.bind(this);
    this.addEvent = this.addEvent.bind(this);
  }

  addEvent(event) {

  }

  updateSearchResults({target: {value}}) {
    const allEvents = this.state.allEvents;
    if (value === '') this.setState({filteredEvents: allEvents});
    else {
      this.setState({
        filteredEvents: allEvents.filter(event => event.title.toLowerCase().includes(value.toLowerCase()))
      });
    }
  };

  componentDidMount() {
    fetch('https://api.eventable.com/v1/events/', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 7761e7e3b25a1d6d315901fcd7180d971f77ea2e'
      }
    })
      .then(response => response.json())
      .then(({results}) => results)
      .then(events => this.setState({allEvents: events, filteredEvents: events}));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <SearchBar updateSearchResults={this.updateSearchResults}/>
        <CreateEvent addEvent={this.addEvent}/>
        <EventList events={this.state.filteredEvents}/>
      </div>
    );
  }
}

export default App;
