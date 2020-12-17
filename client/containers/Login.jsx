import React from 'react';
import axios from 'axios';

function Login({ LOGIN }) {
  function handleSubmit(e) {
    e.preventDefault();
    const user = e.target[0].value;
    const pass = e.target[1].value;

    const options = {
      method: 'GET',
      url: 'http://localhost:8080/api/',
      params: { username: user, password: pass },
    };
    console.log(options);
    axios
      .request(options)
      .then(function (response) {
        if (response.data.display_name) LOGIN();

        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  return (
    <div className="Login component">
      <form onSubmit={handleSubmit}>
        <p>Login to your account</p>
        <label forhtml="username">Username</label>
        <input name="username" />
        <label forhtml="username">Password</label>
        <input name="password" type="password" />
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
}

export default Login;
