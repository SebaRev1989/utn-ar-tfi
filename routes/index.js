var express = require('express');
var router = express.Router();

var userController = require('../controllers/user_controllers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BetSoft' });
});

// Metodos para usuarios
router.get('/users/login', userController.showLogin);
router.get('/users/newUser', userController.showNewUser);

module.exports = router;
