var models = require('../models/models.js');

// Mostrar la pagina inicial de los chats --> GET /chats/principal
exports.showMenu = function (req, res) {
	res.render('chats/principal.ejs');
}

// Mostrar la pagina para crear chats --> GET /chats/newChat
exports.newChat = function (req, res) {
	models.User.findAll({
		where: {id: {ne: req.session.user.id}}
	}).then(
		function(users) {
			res.render('chats/newChat.ejs', {users: users, errors: []});
		}
	).catch(function(error){next(error)});
}

// Cargar el destinatario en el nuevo chat --> GET /chats/newChats/:userId(\\d+)
exports.loadReciver = function (req, res) {
	models.User.find({
		where: {id: req.params.userId}
	}).then(
		function(user) {
			req.body.reciver = 'Para: ' + user.Apellido + ', ' + user.Nombre;
			res.render('chats/newChat.ejs');
		}
	).catch(function(error){next(error)});
}