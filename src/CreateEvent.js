import React, { Component } from 'react';
import moment from 'moment';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

import './CreateEvent.css';

export class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      start_time: '',
      end_time: '',
      showErrorMsg: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateDate(date) {
    return moment(date, 'YYYY-MM-DD HH:mm').isValid();
  }

  handleInputChange({target: {value, name}}) {
    this.setState({ [name]: value });
  }


  handleSubmit(event) {
    event.preventDefault();
    if (this.validateDate(this.state.start_time)
      && this.validateDate(this.state.end_time)
      && this.state.title) {
      this.props.addEvent(this.state);
      this.setState({showErrorMsg: false});
    } else {
      this.setState({showErrorMsg: true});
    }
  }

  render() {
    return (
      <div>
        <h1>Create New Event</h1>
        <Form inline onSubmit={this.handleSubmit}>
          <FormGroup controlId="formInlineTitle">
            <ControlLabel>Title</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="My Great Event" name="title" value={this.state.title} onChange={this.handleInputChange}/>
          </FormGroup>
          {' '}
          <FormGroup controlId="formInlineStartTime">
            <ControlLabel>Start Date</ControlLabel>
            {' '}
            <FormControl type="date" placeholder="2017-01-01" name="start_time" value={this.state.start_time} onChange={this.handleInputChange}/>
          </FormGroup>
          {' '}
          <FormGroup controlId="formInlineEndTime">
            <ControlLabel>End Date</ControlLabel>
            {' '}
            <FormControl type="date" placeholder="2017-01-01" name="end_time" value={this.state.end_time} onChange={this.handleInputChange}/>
          </FormGroup>
          {' '}
          <Button type="submit">
            Submit
          </Button>
          {this.state.showErrorMsg ?
            <div className="alert alert-danger">
              <strong>Error: </strong>Make sure you enter a title and properly format your date.
            </div>
            : null}
        </Form>
      </div>
    );
  }
}