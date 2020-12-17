import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookInfo({ userState }) {
  const [bookInfo, setBookInfo] = useState({
    imageUrl:
      'https://i.guim.co.uk/img/media/9a19fedf27882429f0287ecf5ea24b0e5c582c3f/0_0_2359_3543/master/2359.jpg?width=1010&quality=85&auto=format&fit=max&s=40fc53ce251311a4be327aa7f5d83758',
    title: 'title',
    author: 'author',
    condition: 'conditon',
    borrower: 'borrower',
  });

  useEffect(() => {
    const options = { method: 'GET', url: 'http://localhost:3000/api/' };
    axios
      .request(options)
      .then(function (response) {
        setBookInfo(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  console.log(userState);
  return (
    <div className="details__bookInfo flex">
      <img src={bookInfo.imageUrl} alt="" />

      <span>{bookInfo.title}</span>
      <span>{bookInfo.author}</span>
      <span>{bookInfo.condition}</span>
      <span>{bookInfo.borrower}</span>
    </div>
  );
}

export default BookInfo;
