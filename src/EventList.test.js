import React from 'react';
// import ReactDOM from 'react-dom';
import { EventList } from './EventList';
import { mount } from 'enzyme';

const events = Array.from({length: 9}, (v, i) => {
  return {
    id: "5845d4740b82d60013987e8c",
    "title": "Turkey Eating",
    "description": "",
    "url": "http://i.giphy.com/R1bq4ZgEyvAjK.gif",
    "facebook_url": null,
    "start_time": "2016-11-24T19:00",
    "end_time": "2016-11-24T21:00",
    "all_day": false,
    "timezone": "America/New_York",
    "tz_targets": [],
    "location_target_radius": 0,
    "location_target_enabled": false,
    "locations": [
      {
        "id": "5845d47f9dc1ce0014f14c9d",
        "name": "My House"
      }
    ],
    "background_link": null,
    "categories": [],
    "alerts": [
      {
        "id": "5845d475bb27ba0014a036bd",
        "is_custom": false,
        "custom_time": null,
        "time_value": 15,
        "time_units": "M",
        "before": true,
        "message": "Time for dinner!",
        "categories": []
      }
    ],
    "status": "active"
  }
});
const props = {
  events
};
const wrapper = mount(<EventList {...props}/>);

describe('Basic Rendering of List', () => {
  test('List Contains Events Header', () => {
    expect(wrapper.contains(<h2 className="eventListHeader">Events</h2>)).toBe(true);
  });
});

describe('List Props', () => {
  test('Events prop should an array', () => {
    expect(Array.isArray(wrapper.props().events)).toBe(true);
    expect(wrapper.props().events.length).toBe(9);
  });
});

describe('Rendering Events', () => {
  test('Should render the right amount of events', () => {
    expect(wrapper.find('.events').children().length).toBe(9);
  });
});
