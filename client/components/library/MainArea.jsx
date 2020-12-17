/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MainArea({ setUserState, userState }) {
  const [selected, setSelected] = useState();

  useEffect(() => {
    const options = { method: 'GET', url: 'http://localhost:8080/api/getlibrary' };
    axios
      .request(options)
      .then(function (res) {
        setUserState((state) => ({ ...state, books: res.data }));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);


  const list = userState.books.map((row) => {
    return (
      <li
        key={row.title}
        id={row.title}
        className={`${selected === `${row.title}` ? 'listItem flex selected' : 'listItem flex'}`}
        onClick={() => {
          setSelected(row.title);
          setUserState((prevState) => ({
            ...prevState,
            selectedBook: {
              title: row.title,
              author: row.author,
              borrower: row.borrower,
              condition: row.condition,
            },
          }));
        }}>
        <span>{row.title}</span>
        <span>{row.author}</span>
        <span>{row.borrower}</span>
        <span>{row.condition}</span>
      </li>
    );
  });

  return (
    <div className="library__mainArea flex">
      <ul className="flex">
        <li key="default" id="default" className="listItem header flex">
          <span>Title</span>
          <span>Author</span>
          <span>Borrower</span>
          <span>Condition</span>
        </li>
        {list || null}
      </ul>
    </div>
  );
}

export default MainArea;
