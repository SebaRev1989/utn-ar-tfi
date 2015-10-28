var path = require('path');

// Postgres DATABASE_URL = postgres://user:passwd@hotst:port/database
// SQLite DATABASE_URL = sqlite://:@:/
var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name = (url[6]||null);
var user = (url[2]||null);
var pwd = (url[3]||null);
var protocol = (url[1]||null);
var dialect = (url[1]||null);
var port = (url[5]||null);
var host = (url[4]||null);
var storage = process.env.DATABASE_STORAGE;

// Cargar el modelo ORM
var Sequelize = require('sequelize');

// Usar BBDD Sqlite o Postgres
var sequelize = new Sequelize(DB_name, user, pwd,
	{
		dialect: protocol,
		protocol: protocol,
		port: port,
		host: host,
		storage: storage,  // solo SQlite (.env)
		omitNull: true     // solo Postgres
	}
	);

// Usar DB SQLite
var sequelize = new Sequelize(null, null, null, {dialect: "sqlite", storage: "forum.sqlite"});

// Importar la definicion de la tabla Usuarios en user.js
var User = sequelize.import(path.join(__dirname,'user'));

exports.User = User;  // exporta la definicion de la tabla User

// Crea e inicializa la tabla de usuarios en DB
sequelize.sync().then(function(){
	User.count().then(function (count){
		if (count === 0) {
			User.create({
				apellido: 'Reverso',
				nombre: 'Sebastián',
				username: 'sreverso',
				password: 'seba1234'
			}).then(function(){console.log('Base de datos inicializada.')});
		}
	});
});