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
				idHeader: max, idUser: req.session.user.id, mensaje: req.body.message.texto, tipo: 'foro'
			}).save()
			.then(function(){res.redirect('/forum/showForum')});
		});
	});
}

exports.showForum = function (req, res) {
	models.Forum.findAll().then(
		function (forums) {
			res.render('forum/showForum.ejs', {forums: forums, errors: []});
		}
	).catch(function (error){next(error)});
}

// Mostrar los mensajes de un determinado foro --> GET /forum/showForum/:forumId(\\d+)
exports.getForum = function (req, res) {
	models.Message.findAll({
		where: {
			idHeader: req.params.forumId,
			tipo: 'foro'
		}
	}).then(function (messages) {
		res.render('forum/_forum.ejs', {messages: messages, idHeader:req.params.forumId, errors: []});
	}).catch(function (error) {next(error)});
	/*models.Forum.find({
		where: {id: req.params.forumId}
	}).then(function (forum) {
		models.Message.findAll({
			where: {
				idHeader: forum.id,
				tipo: 'foro'
			}
		}).then(function (forum, messages) {
			res.render('forum/_forum.ejs', {forum: forum, messages: messages, errors: []});
		}).catch(function (error) {next(error)});
	}).catch(function (error) {next(error)});*/
}

exports.answerForum = function (req, res) {
	var message = models.Message.build({
		idHeader: req.params.idHeader, idUser: req.session.user.id, mensaje: req.body.message.texto, tipo: 'foro'
	}).save().then(function () {res.redirect(req.originalUrl)});
}