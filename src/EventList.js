import React from 'react';
import { Event } from './Event';

export const EventList = ({ events = [] }) => (<div>
    <h2 className="eventListHeader">Events</h2>
    <ul className="events">
      {events.map((event, idx) => <li><Event key={idx} event={event}/></li>)}
    </ul>
  </div>
);
