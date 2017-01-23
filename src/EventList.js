import React from 'react';

export const EventList = ({ events = [] }) => (
  <div>
    <h2 className="eventListHeader">Events</h2>
    <div className="events">
      {events.map((event, idx) => <p key={idx}>Event</p>)}
    </div>
  </div>
);
