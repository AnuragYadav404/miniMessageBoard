const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hey!!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
// here we have to define the following:
/*
  1. get for  "/" this should display all the messages
  2. get for "/new" this should display a form for the user to fill
  3. post for "/new" this posts the message data to server and redirects the request to "/"
*/
router.get("/", function (req, res, next) {
  res.render("index", { messageArray: messages });
});

router.get("/new", function (req, res, next) {
  res.render("newMessage");
});

router.post("/new", function (req, res, next) {
  let newMsg = {
    user: req.body.name,
    text: req.body.message,
    added: new Date(),
  };
  messages.push(newMsg);
  res.redirect("/");
});

module.exports = router;
