/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MainArea({ setUserState }) {
  const [items, setItems] = useState([
    { title: 'Haryy Potter', author: 'jk rowling', borrower: 'Gavin', condition: 'good' },
    { title: 'Of Mice and Men', author: 'John Steinbeck', borrower: 'Sean', condition: 'bad' },
    {
      title: 'A Farewell to Arms',
      author: 'Ernest Hemingway',
      borrower: 'Taylor',
      condition: 'Excellent',
    },
  ]);
  const [selected, setSelected] = useState();

  useEffect(() => {
    const options = { method: 'GET', url: `http://localhost:3000/api/library/` };
    axios
      .request(options)
      .then(function (response) {
        setItems(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const list = items.map((row) => {
    return (
      <li
        key={row.title}
        id={row.title}
        className={`${selected === `${row.title}` ? 'listItem flex selected' : 'listItem flex'}`}
        onClick={(e) => {
          setSelected(e.target.parentElement.id);
          setUserState((prevState) => ({
            ...prevState,
            selectedBook: e.target.parentElement.id,
          }));
          // getInfo(e.target.parentElement.id);
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
      <ul className="flex">{list}</ul>
    </div>
  );
}

export default MainArea;
