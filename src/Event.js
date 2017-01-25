import React from 'react';
import './Event.css';
import moment from 'moment';

export const Event = ({ event }) => {
  return (
    event ?
      <div>
        <div className="col-md-6 center-block">
          <div className="card center-block" style={{width: "20rem"}}>
            <div className="card-block">
              <h4 className="card-title">{event.title}</h4>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{moment(event.start_time).format("dddd, MMMM Do YYYY, h:mm a")}</li>
              <li className="list-group-item">{moment(event.end_time).format("dddd, MMMM Do YYYY, h:mm a")}</li>
            </ul>
          </div>
        </div>
      </div>:
      null
  )};