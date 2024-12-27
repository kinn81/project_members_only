var express = require("express");
var router = express.Router();
var messageController = require("../controllers/messageController");
const authentication = require("../controllers/helpers/authentication");

/* GET create message form. */
router.get("/", authentication.isAuthenticated, (req, res, next) => {
  res.render("layouts/create-message-form");
});

router.post(
  "/",
  authentication.isAuthenticated,
  messageController.createMessage
);

module.exports = router;
