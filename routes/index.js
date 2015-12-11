var express = require('express');
var router = express.Router();

var userController = require('../controllers/user_controllers');
var sessionController = require('../controllers/session_controllers');
var forumController = require('../controllers/forum_controllers');
var chatController = require('../controllers/chat_controllers');

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

// Metodos para foro
router.get('/forum/principal', sessionController.loginRequired, forumController.showMenu);
router.get('/forum/newForum', sessionController.loginRequired, forumController.newForum);
router.post('/forum/newForum', sessionController.loginRequired, forumController.createForum);
router.get('/forum/showForum', sessionController.loginRequired, forumController.showForum);
router.get('/forum/showForum/:forumId(\\d+)', sessionController.loginRequired, forumController.getForum);

// Metodos para chats
router.get('/chats/principal', sessionController.loginRequired, chatController.showMenu);
router.get('/chats/newChat', sessionController.loginRequired, chatController.newChat);
//router.get('/chats/newChat/:userId(\\d+)', sessionController.loginRequired, chatController.loadReciver);

module.exports = router;
