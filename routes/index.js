var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hello there!",
    user: "Ciaran",
    added: new Date(),
  },
  {
    text: "Woof woof",
    user: "Wilbur",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini-Message", messages: messages });
});

module.exports = { router, messages };
