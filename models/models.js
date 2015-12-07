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

// Importar la definicion de la tabla Usuarios en user.js
var User = sequelize.import(path.join(__dirname,'user'));
exports.User = User;

// Importar la definicion de la tabla Chats en chat.js
var Chat = sequelize.import(path.join(__dirname,'chat'));
exports.Chat = Chat;

// Importar la definicion de la tabla Forum en forum.js
var Forum = sequelize.import(path.join(__dirname,'forum'));
exports.Forum = Forum;

// Importar la definicion de la tabla Messages en message.js
var Messages = sequelize.import(path.join(__dirname,'message'));
exports.Messages = Messages;

// Verifica la existencia de la DB y, si no existe, la crea
sequelize.sync().then(function(){console.log('Base de datos creada.')});
