var express = require("express");
var router = express.Router();
var signUpController = require("../controllers/signUpController");

/* GET sign-up form. */
router.get("/", (req, res) => res.render("layouts/sign-up-form"));

router.post("/", signUpController.postSignUp);

module.exports = router;
