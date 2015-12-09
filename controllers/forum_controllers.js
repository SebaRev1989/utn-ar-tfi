var models = require('../models/models.js');

// Mostrar la pagina inicial del foro
exports.showMenu = function (req, res) {
	res.render('forum/principal.ejs');
}

exports.newForum = function (req, res) {
	res.render('forum/newForum.ejs');
}