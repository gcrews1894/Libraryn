const express = require("express");

const app = express();
const path = require("path");
const cookieParser = require('cookie-parser');
const router = require("./routes/routes");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/dist", express.static(path.resolve(__dirname, "../dist")));

app.use("/api", router);

app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "../index.html"))
);

app.listen(5555, console.log("listening on port 5555"));
