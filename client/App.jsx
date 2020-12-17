import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Details from './containers/Details';
import Library from './containers/Library';
import Sidebar from './containers/Sidebar';
import Login from './containers/Login';

function App() {
  const [userState, setUserState] = useState({
    isLoggedIn: false,
    login: '',
    books: [],
    selectedBook: '',
  });

  function LOGIN(data) {
    setUserState(data);
  }

  function LOGOUT() {
    setUserState({
      isLoggedIn: false,
      login: '',
    });
  }

  // useEffect(() => {
  //   axios
  //     .get('/api/auth/verify')
  //     .then(({ data }) => {
  //       if (!data.isLoggedIn) {
  //         return LOGOUT();
  //       }
  //       return LOGIN(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // if (userState.isLoggedIn === false) {
  //   return <Login />;
  // }
  return (
    <div className="grid-container">
      <Details userState={userState} />
      <Library setUserState={setUserState} />
      <Sidebar />
    </div>
  );
}

export default App;
