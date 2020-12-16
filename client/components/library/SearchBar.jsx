import React, { useState, useEffect } from 'react';

function SearchBar() {
  return (
    <form className="library__searchBar flex">
      <input type="text" name="search" className="searchBar__input" />
      <input type="submit" value="Search" className="searchBar__button" />
    </form>
  );
}

export default SearchBar;
