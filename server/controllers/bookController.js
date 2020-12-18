const { check } = require("prettier");
const db = require("../models/db");

const addBook = `INSERT INTO books(title, author) VALUES ($1, $2) RETURNING *;`;
const checkAndAddBook = `INSERT INTO books(title, author, cover)
SELECT $1, $2, $3
WHERE
    NOT EXISTS (
        SELECT * FROM books WHERE title = $1
    );`;

const bookController = {};

bookController.addBook = (req, res, next) => {
  console.log("beginning addBook");
  const { title, author, cover } = req.body;
  const params = [title, author, cover];
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
