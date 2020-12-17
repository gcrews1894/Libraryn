import React, { useState, useEffect } from 'react';

import BookInfo from '../components/details/BookInfo';

function Details({ userState }) {
  return (
    <main className="details__container">
      <BookInfo userState={userState} />
    </main>
  );
}

export default Details;
