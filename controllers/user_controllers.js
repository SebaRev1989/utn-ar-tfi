var models = require('../models/models.js');

exports.showLogin = function (req, res) {
	res.render('users/login');
};

exports.showNewUser = function (req, res) {
	res.render('users/newUser');
};