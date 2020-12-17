const db = require("../models/db");

const addBook = `INSERT INTO books(title, author) VALUES ($1, $2) RETURNING *;`;

const bookController = {};

bookController.addBook = (req, res, next) => {
  console.log("beginning addBook");
  const { title, author } = req.body;
  const params = [title, author];
  db.query(addBook, params)
    .then((data) => {
      res.locals.book = data.rows[0];
      console.log("this is the returned data from adding a book", data.rows[0]);
      console.log("added new book!");
      next();
    })
    .catch((e) => {
      next(e);
    });
};

module.exports = bookController;
