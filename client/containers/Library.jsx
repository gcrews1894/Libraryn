import React, { useState, useEffect } from 'react';

import SearchBar from '../components/library/SearchBar';
import MainArea from '../components/library/MainArea';

function Library({ setUserState, userState }) {
  return (
    <main className="library__container">
      <SearchBar />
      <MainArea setUserState={setUserState} userState={userState} />
    </main>
  );
}

export default Library;
