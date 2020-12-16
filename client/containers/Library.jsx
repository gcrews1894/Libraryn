import React, { useState, useEffect } from 'react';

import SearchBar from '../components/library/SearchBar';
import MainArea from '../components/library/MainArea';

function Library() {
  return (
    <main className="library__container">
      <SearchBar />
      <MainArea />
    </main>
  );
}

export default Library;
