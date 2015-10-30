var models = require('../models/models.js');

exports.showLogin = function (req, res) {
	res.render('users/login');
};

exports.showNewUser = function (req, res) {
	res.render('users/newUser');
};

exports.create = function (req, res) {
	var user = models.User.build(
		{apellido: req.body.user.apellido , nombre: req.body.user.nombre,
			username: req.body.user.username, password: req.body.user.password}
	).save().then(function(){res.redirect('/')});
};