var express = require('express');
var router = express.Router();
var homePageController = require('../controllers/homePageController');

/* GET home page. */
router.get('/', homePageController.getHomepage);
module.exports = router;
