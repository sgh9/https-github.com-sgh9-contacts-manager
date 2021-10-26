import React, { useState } from 'react';

const Search = ({ onSearchKey }) => {
  const [searchKey, setSearchKey] = useState('');
  return (
    <div className="search-container">
      <input
        className="search"
        type="search"
        value={searchKey}
        placeholder="Search contacts"
        onChange={(e) => {
          setSearchKey(e.target.value);
          onSearchKey(e.target.value);
        }}
      />
    </div>
  );
};
export default Search;
