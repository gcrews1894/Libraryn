const { ModuleFilenameHelpers } = require("webpack");
const db = require("../models/db");

const userController = {};
const login = `SELECT * FROM users where username = $1;`;
const users = `SELECT * FROM users`;
const addUser = `INSERT INTO users(display_name, username, password) VALUES ($1, $2, $3);`;

userController.login = (req, res, next) => {
  if (req.cookies.user_id) return next();
  const { username, password } = req.query;
  const params = [username];
  db.query(login, params)
    .then((data) => {
      /**
       * need to not return next if password incorect.
       * if no user found then error is thrown
       */
      if (data.rows[0].password === password) {
        console.log("password Matches!");
        res.locals.user = data.rows[0];
        return next();
      }
      console.log("authentication failed!");
      res.sendStatus(400)
    })
    .catch((e) => {
      next(e);
    });
};

userController.signup = (req, res, next) => {
  console.log("beginning signup");
  const { display_name, username, password } = req.body;
  console.log(req.body);
  const params = [display_name, username, password];
  db.query(addUser, params)
    .then((data) => {
      res.locals.user = data.rows[0];
      console.log(data.rows);
      console.log("added new user!");
      next();
    })
    .catch((e) => {
      next(e);
    });
};

module.exports = userController;
