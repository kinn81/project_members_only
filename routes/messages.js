var express = require('express');
var router = express.Router();
const authentication = require('../controllers/helpers/authentication');
var messageController = require('../controllers/messageController');

router.post(
  '/:id/delete',
  authentication.isAuthenticated,
  authentication.isAdmin,
  messageController.deleteMessage,
);

/* GET create message form. */
router.get('/create', authentication.isAuthenticated, (req, res, next) => {
  res.render('layouts/create-message-form');
});

router.post('/create', authentication.isAuthenticated, messageController.createMessage);

module.exports = router;

module.exports = router;
