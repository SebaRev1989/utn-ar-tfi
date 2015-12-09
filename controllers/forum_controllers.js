var models = require('../models/models.js');

// Mostrar la pagina inicial del foro
exports.showMenu = function (req, res) {
	res.render('forum/principal.ejs');
}

exports.newForum = function (req, res) {
	res.render('forum/newForum.ejs');
}

exports.createForum = function (req, res) {
	var forum = models.Forum.build({
		idUser: req.session.user.id, tema: req.body.forum.tema
	}).save()
	.then(function(){
		models.Forum.max('id').then(function(max){
			var message = models.Message.build({
				idHeader: max, idUser: req.session.user.id, mensaje: req.body.message.texto
			}).save()
			.then(function(){res.redirect('/forum/showForum')});
		});
	});
}

exports.showForum = function (req, res) {
	models.Forum.findAll().then(
		function(forums) {
			res.render('forum/showForum.ejs', {forums: forums, errors: []});
		}
	).catch(function(error){next(error)});
}

