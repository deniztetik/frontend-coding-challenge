import React, { Component } from 'react';
import './App.css';
import { EventList } from './EventList';
import { SearchBar } from './SearchBar';
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
      currentId: 5,
    };
    this.updateSearchResults = this.updateSearchResults.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.sortEvents = this.sortEvents.bind(this);
  }

  // Method called when new event is successfully submitted in <CreateEvent />
  addEvent(event) {
    event.reactId = this.state.currentId;
    const updatedEvents = [...this.state.allEvents, event];
    this.setState({allEvents: updatedEvents, filteredEvents: updatedEvents, currentId: this.state.currentId + 1});
  }

  // Method called when one of the sort options is submitted from <SortForm />
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

  // Method called interactively whenever input value changes in <SearchBar />
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
      //Assign a specific "reactId" so that we can use the "keys" prop when rendering all events in <EventList />
      .then(events => events.map((event, idx) => Object.assign({}, event, {reactId: idx + 1})))
      .then(events => this.setState({allEvents: events, filteredEvents: events}));
  }

  render() {
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
