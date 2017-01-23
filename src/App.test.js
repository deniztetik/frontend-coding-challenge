import React from 'react';
import App from './App';
import { shallow, mount, render } from 'enzyme';

const wrapper = mount(<App />);

it('renders without crashing', () => {
});

it('should have state', () => {
  expect(wrapper.state()).toBeTruthy();
});

it('should have events in state', () => {
  expect(wrapper.state().events).toBeTruthy();
});