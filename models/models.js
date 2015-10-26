var path = require('path');

// Cargar el modelo ORM
var Sequelize = require('sequelize');

// Usar DB SQLite
var sequelize = new Sequelize(null, null, null, {dialect: "sqlite", storage: "forum.sqlite"});

// Importar la definicion de la tabla Usuarios en user.js
var User = sequelize.import(path.join(_dirname,'user'));

exports.User = User;  // exporta la definicion de la tabla User

// Crea e inicializa la tabla de usuarios en DB
sequelize.sync().success(function(){
	User.count().success(function (count){
		if (count === 0) {
			User.create({
				apellido: 'Reverso',
				nombre: 'Sebastián',
				username: 'sreverso'
			}).success(function(){console.log('Base de datos inicializada.')});
		}
	});
});