var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET log-in form. */
router.get('/', (req, res) => res.render('layouts/log-in-form'));

router.post(
  '/',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/',
  }),
);

module.exports = router;
