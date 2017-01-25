import React from 'react';
import { Button } from 'react-bootstrap';
import './SortForm.css';

export const SortForm = ({sortEvents}) => {
  const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
  return (
    <div>
      <h3>Sort by:</h3>
      <div className="well" style={wellStyles}>
        <Button bsStyle="primary" bsSize="large" block onClick={() => sortEvents('Show All')} >Show All</Button>
        <Button bsStyle="primary" bsSize="large" block onClick={() => sortEvents('Name')}>Name</Button>
        <Button bsSize="large" block onClick={() => sortEvents('Date')}>Date</Button>
      </div>
    </div>

  );
};