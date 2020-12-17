import React, { useState, useEffect } from 'react';

import SearchBar from '../components/library/SearchBar';
import MainArea from '../components/library/MainArea';

function Library({ setUserState }) {
  return (
    <main className="library__container">
      <SearchBar />
      <MainArea setUserState={setUserState} />
    </main>
  );
}

export default Library;
