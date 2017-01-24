import React from 'react';

export const SearchBar = ({updateSearchResults}) => (
  <form onSubmit={updateSearchResults}>
    <label>
      Search
      <input type="text" onChange={updateSearchResults} />
    </label>
    <input type="submit" value="Submit" />
  </form>
);