import React, { Component } from 'react';

export class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      startDate: '',
      endDate: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange({target: {value, name}}) {
    this.setState({ [name]: value });
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.addEvent(this.state);
  }

  render() {
    return (
      <div>
        <h1>Create New Event</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title
            <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange}/>
          </label>
          <label>
           Start Date
           <input type="text" name="start_time" value={this.state.start_time} onChange={this.handleInputChange}/>
          </label>
          <label>
            End Date
            <input type="text" name="end_time" value={this.state.end_time} onChange={this.handleInputChange}/>
          </label>
         <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}