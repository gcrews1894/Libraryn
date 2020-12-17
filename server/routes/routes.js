const express = require("express");

const router = express.Router();
const userController = require("../controllers/userController.js");
const bookController = require("../controllers/bookController.js");
const libraryController = require("../controllers/libraryController.js");
const authController = require("../controllers/authController.js");

router.get("/", userController.login, authController.setCookie, (req, res) =>
  res.status(200).json(res.locals.user)
);

router.post("/add", userController.signup, (req, res) =>
  res.status(200).json(res.locals.user)
);

router.post(
  "/book",
  bookController.addBook,
  libraryController.addLibrary,
  (req, res) => {
    res.status(200).json(res.locals.book);
  }
);

router.get("/getlibrary", libraryController.getLibrary, (req, res) =>
  res.status(200).json(res.locals.library)
);


module.exports = router;
