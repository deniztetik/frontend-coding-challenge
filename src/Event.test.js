import React from 'react';
import { mount, render } from 'enzyme';
import { Event } from './Event';

const props = {
  event: {
    title: "hello",
    description: "this is a great event",
    start_time: "today",
    end_time: "tomorrow",
    url: "this is a great link"
  }
};

const wrapper = render(<Event {...props}/>);
describe('Basic Rendering of Event', () => {
  test('Basic Rendering of Event', () => {
    expect(wrapper);
  });
});

describe('Events should have all the proper elements', () => {
  test('Event should have title', () => {
    expect(wrapper.find('.title').length).toBe(1);
  });
  test('Event should have a description', () => {
    expect(wrapper.find('.description').length).toBe(1);
  });
  test('Event should have a start time', () => {
    expect(wrapper.find('.startTime').length).toBe(1);
  });
  test('Event should have an end time', () => {
    expect(wrapper.find('.endTime').length).toBe(1);
  });
  test('Event should have a url', () => {
    expect(wrapper.find('.url').length).toBe(1);
  });
});
