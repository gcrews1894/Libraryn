import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookInfo({ userState }) {
  // temp, need get actual cover image from api
  const [bookInfo, setBookInfo] = useState({
    imageUrl:
      'https://i.guim.co.uk/img/media/9a19fedf27882429f0287ecf5ea24b0e5c582c3f/0_0_2359_3543/master/2359.jpg?width=1010&quality=85&auto=format&fit=max&s=40fc53ce251311a4be327aa7f5d83758',
  });

  return (
    <div className="details__bookInfo flex">
      <img src={bookInfo.imageUrl} alt="" />

      <span>{userState.selectedBook.title}</span>
      <span>{userState.selectedBook.author}</span>
      <span>{userState.selectedBook.condition}</span>
      <span>{userState.selectedBook.borrower}</span>
    </div>
  );
}

export default BookInfo;
