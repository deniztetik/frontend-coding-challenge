import React from 'react';
import { Event } from './Event';
import './EventList.css';

export const EventList = ({ events = [] }) => {
  return(
    <div>
      <h2 className="eventListHeader">Events</h2>
      <ul className="events">
        {events.map(event => <li key={event.reactId}><Event event={event}/></li>)}
      </ul>
    </div>
  );
}
