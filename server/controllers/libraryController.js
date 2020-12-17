const db = require("../models/db");

const fetchLibrary = `SELECT * FROM libraries l INNER JOIN users u ON u._id = l.user_id INNER JOIN books b ON b._id = l.book_id WHERE u._id = $1`;

const addBook = `INSERT INTO books(title, author) VALUES ($1, $2);`;
const addToLibrary = `INSERT INTO libraries(user_id, book_id, borrower, condition) VALUES ($1, $2, $3, $4);`;

const libraryController = {};

libraryController.addLibrary = (req, res, next) => {
  console.log("beginning new library entry");
  const { user_id, borrower, condition } = req.body;
  // const { user_id } = req.cookie;
  console.log("these are cookies", req.cookie);
  const { _id } = res.locals.book;
  console.log(_id);
  const params = [user_id, _id, borrower, condition];
  db.query(addToLibrary, params)
    .then((data) => {
      console.log(data.rows);
      console.log("added new library entry!");
      next();
    })
    .catch((e) => {
      next(e);
    });
};

// libraryController.addBookToLibrary = (req, res, next) => {
//   const { user_id, title, author, borrower, condition } = req.body;
//   const book_id = null
//   console.log(req.body);
//   const params1 = [ title, author ];
//   db
//     .query(addBook, params1)
//     .then((data) => {
//       console.log(data.rows)
//       book_id = data.rows[0].book_id
//       libraryController.addLibrary(req, res, next) {

//       }
//     })
//     .catch((e) => next(e))
// }

libraryController.getLibrary = (req, res, next) => {
  console.log("in get Library");
  const { user_id } = req.body;
  console.log(req.body);
  const params = [user_id];
  db.query(fetchLibrary, params)
    .then((data) => {
      res.locals.library = data.rows;
      console.log(data.rows);
      console.log("got new library!");
      next();
    })
    .catch((e) => {
      next(e);
    });
};

module.exports = libraryController;
