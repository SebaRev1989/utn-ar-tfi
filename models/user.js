module.exports = function (sequelize, DataTypes) {
	return sequelize.define('User',
		{
			apellido: {
				type: DataTypes.STRING,
				validate: { notEmpty: {msg: "--> Falta apellido"}}
			},
			nombre: {
				type: DataTypes.STRING,
				validate: { notEmpty: {msg: "--> Falta nombre"}}
			},
			username: {
				type: DataTypes.STRING,
				validate: { notEmpty: {msg: "--> Falta nombre de usuario"}}
			},
		});
}