import React, { useState } from 'react';
import axios from 'axios';

function Login({ LOGIN }) {
  const [isVis, setIsVis] = useState(false);
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
  function createAccount(e) {
    e.preventDefault();
    const displayname = document.getElementById('displayname').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // console.log(displayname);
    // console.log(username);
    // console.log(password);

    // route
    axios
      .post('http://localhost:8080/api/add', {
        user: username,
        display: displayname,
        pass: password,
      })
      // req.body.user
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    // all values in the object will be on req.body
  }
  return !isVis ? (
    <div className="Login component">
      <div className="loginImage">
        <img className="backgroundImage" src="client/assets/background_image_70.png"></img>
      </div>
      <div className="frontForm">
        <h1 className="loginHeader">Managing your library is just a few clicks away!</h1>
        <div className="loginForm">
          <form className="signinForm" onSubmit={handleSubmit}>
            <p className="containertext">Login to your account</p>
            <label className="subtitle" htmlFor="username">
              Username
            </label>
            <br></br>
            <input className="logininput" name="username" />
            <br></br>
            <label className="subtitle" htmlFor="password">
              Password
            </label>
            <br></br>
            <input className="logininput" name="password" type="password" />
            <br></br>
            <div className="buttondiv">
              <input className="submitbutton" id="submittop" type="submit" value="Log In" />
            </div>
          </form>
          <div className="bttn style createform">
            <p className="containertext" id="createtext">
              Don't have an account? <br></br> Click here!
            </p>
            <div className="buttondiv">
              <button className="submitbutton create" onClick={() => setIsVis(true)} type="button">
                Create Account!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <form>
      <div className="Create form">
        <label htmlFor="displayname">Displayname</label>
        <input name="displayname" id="displayname" />
        <label htmlFor="username">Username</label>
        <input name="username" id="username" />
        <label htmlFor="password">Password</label>
        <input name="password" type="password" id="password" />
        <button type="submit" onClick={createAccount}>
          submit
        </button>
      </div>
    </form>
  );
}

export default Login;
