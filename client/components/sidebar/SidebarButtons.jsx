import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SidebarButtons({ setUserState }) {
  const [adding, setAdding] = useState(false);
  const [formState, setFormState] = useState({
    title: '',
    author: '',
    borrower: '',
    condition: '',
  });

  function event(e, key) {
    setFormState((prevState) => {
      prevState[key] = e.target.value;
      return prevState;
    });
  }

  function send(e) {
    e.preventDefault();
    setAdding(false);
    const options = {
      method: 'POST',
      url: 'http://localhost:8080/api/book',
      data: formState,
    };

    axios
      .request(options)
      .then(function (response) {
        setUserState((state) => ({...state,  books: [...state.books, formState] }));
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
    console.log('123', options);
  }
  return (
    <div className="sidebar__buttons flex">
      {!adding ? (
        <button
          type="button"
          className="button__1"
          onClick={() => {
            setAdding(true);
          }}>
          Add Book
        </button>
      ) : (
        <form onSubmit={(e) => send(e)} className="sidebar__form">
          <input type="text" placeholder="Title" onChange={(e) => event(e, 'title')} />
          <input
            type="text"
            placeholder="Author"
            name="author"
            onChange={(e) => event(e, 'author')}
          />
          <input
            type="text"
            placeholder="Borrower"
            name="borrower"
            onChange={(e) => event(e, 'borrower')}
          />
          <input
            type="text"
            placeholder="Condition"
            name="condition"
            onChange={(e) => event(e, 'condition')}
          />
          <input type="submit" value="submit" />
        </form>
      )}
    </div>
  );
}

export default SidebarButtons;
