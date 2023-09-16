const express = require("express");
const router = express.Router();

/* GET home page. */
// here we have to define the following:
/*
  1. get for  "/" this should display all the messages
  2. get for "/new" this should display a form for the user to fill
  3. post for "/new" this posts the message data to server and redirects the request to "/"
*/
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
