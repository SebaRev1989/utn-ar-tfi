var models = require('../models/models.js');

// Mostrar la pagina inicial de mensajes
exports.showAll = function (req, res) {
	res.render('forum/messages.ejs');
}