var express = require("express");
var router = express.Router();
const { messages } = require("./index");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("form", { title: "New Msg" });
});

router.post("/", (req, res, next) => {
  const user = req.body.username;
  const message = req.body.message;
  messages.push({ text: message, user: user, added: new Date() });
  res.redirect('/');
});

module.exports = router;
