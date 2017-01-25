import React, { Component } from 'react';
import './App.css';
import { EventList } from './EventList';
import { SearchBar } from './Search/SearchBar';
import { CreateEvent } from './CreateEvent';
import { SortForm } from './SortForm';
import moment from 'moment';
import 'whatwg-fetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allEvents: [],
      filteredEvents: [],
      currentId: 1,
    };
    this.updateSearchResults = this.updateSearchResults.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.sortEvents = this.sortEvents.bind(this);
  }

  addEvent(event) {
    const start_time = moment(event.start_time, 'MM/DD/YY HH:mm').toISOString();
    const end_time = moment(event.end_time, 'MM/DD/YY HH:mm').toISOString();
    console.log(start_time);
    console.log(end_time);
    event.id = this.state.currentId;
    const updatedEvents = [...this.state.allEvents, event];
    this.setState({allEvents: updatedEvents, filteredEvents: updatedEvents, currentId: this.state.currentId + 1});
  }

  sortEvents(str) {
    const allEvents = this.state.allEvents;
    if (str === 'Name') {
      const sortedEvents = [...this.state.filteredEvents].sort((a, b) => {
        return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
      });
      this.setState({filteredEvents: sortedEvents});
    } else if (str === 'Date') {
      const sortedEvents = [...this.state.filteredEvents].sort((a, b) => {
        return moment(a.start_time) > moment(b.start_time) ? 1 : -1;
      });
      this.setState({filteredEvents: sortedEvents});
    } else {
      this.setState({filteredEvents: allEvents});
    }
  }

  updateSearchResults(event) {
    event.preventDefault();
    const allEvents = this.state.allEvents;
    const text = event.target.value;
    if (text === '') this.setState({filteredEvents: allEvents});
    else {
      this.setState({
        filteredEvents: allEvents.filter(event => event.title.toLowerCase().includes(text.toLowerCase()))
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
    console.log(this.state.filteredEvents);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Eventable</h2>
        </div>
        <span>
          <SearchBar updateSearchResults={this.updateSearchResults}/>
          <SortForm sortEvents={this.sortEvents}/>
        </span>
        <CreateEvent addEvent={this.addEvent}/>
        <EventList events={this.state.filteredEvents}/>
      </div>
    );
  }
}

export default App;
