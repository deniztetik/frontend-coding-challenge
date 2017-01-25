import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export const SearchBar = ({updateSearchResults}) => (
  <Form inline onSubmit={updateSearchResults}>
    <FormGroup controlId="formInlineTitle">
      <ControlLabel>Search</ControlLabel>
      {' '}
      <FormControl type="text" onChange={updateSearchResults}/>
    </FormGroup>
    <Button type="submit">
      Submit
    </Button>
  </Form>
);