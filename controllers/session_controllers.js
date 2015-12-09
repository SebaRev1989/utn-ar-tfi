var models = require('../models/models.js');

// Autorizacion de accesos
exports.loginRequired = function (req, res, next){
	if (req.session.user) {
		next();
	} else{
		res.redirect('/login');
	};
}

// Formulario de login
exports.new = function  (req, res) {
	var errors = req.session.errors || {};
	req.session.errors = {};
	res.render('users/login.ejs', {errors: errors});
};

// Crear la sesion
exports.create = function(req, res, next){
	var usuario = req.body.usuario;
	var password = req.body.password;
	models.User.find({
		where: {username: usuario}
	}).then(function (user) {
		if (user.username === usuario && user.password === password) {
			req.session.user = {id:user.id, username:user.username, apellido:user.apellido, nombre:user.nombre};
			res.redirect(req.session.redir.toString());
		} else {
			console.log('Contraseña incorrecta. Intente nuevamente.');
			res.redirect('/login');
			return;
		};
	}).catch(function (error) {
		req.session.errors = [{"message": 'Se ha producido un error: '+ error}];
		res.redirect('/');
		return;
	});
};

// Elimino la sesion
exports.destroy = function (req, res) {
	delete req.session.user;
	res.redirect('/');
};
