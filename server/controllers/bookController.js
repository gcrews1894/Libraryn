const { check } = require("prettier");
const db = require("../models/db");

const addBook = `INSERT INTO books(title, author) VALUES ($1, $2) RETURNING *;`;
const checkAndAddBook = `INSERT INTO books(title, author)
SELECT $1, $2
WHERE
    NOT EXISTS (
        SELECT * FROM books WHERE title = $1
    );`;

const bookController = {};

bookController.addBook = (req, res, next) => {
  console.log("beginning addBook");
  const { title, author } = req.body;
  const params = [title, author];
  db.query(checkAndAddBook, params)
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
