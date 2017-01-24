import React from 'react';
import './Event.css';

export const Event = ({ event }) => {
  return (
    event ?
      <div>
        <h3 className="title">{event.title}</h3>
        <p className="description">{event.description}</p>
        <ul>
          <li className="startTime">{event.start_time}</li>
          <li className="endTime">{event.end_time}</li>
        </ul>
        <p className="url">Learn more: {event.url}</p>
      </div> :
      null
  )};