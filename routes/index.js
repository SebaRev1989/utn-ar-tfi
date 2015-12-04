var express = require('express');
var router = express.Router();

var userController = require('../controllers/user_controllers');
var sessionController = require('../controllers/session_controllers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BetSoft', errors: [] });
});

// Metodos para usuarios
router.get('/users/newUser', userController.showNewUser);
router.post('/users/create', userController.create);

// Metodos para sesion
router.get('/login', sessionController.new);
router.post('/login', sessionController.create);
router.get('/logout', sessionController.destroy);

module.exports = router;
