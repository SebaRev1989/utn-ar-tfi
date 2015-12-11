module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Message',
		{
			idHeader: {
				type: DataTypes.INTEGER,
				validate: { notEmpty: {msg: "--> Falta encabezado"}}
			},
			idUser: {
				type: DataTypes.INTEGER,
				validate: { notEmpty: {msg: "--> Falta usuario"}}
			},
			mensaje: {
				type: DataTypes.TEXT,
				validate: { notEmpty: {msg: "--> Falta mensaje"}}
			},
			tipo: {
				type: DataTypes.STRING,
				validate: { notEmpty: {msg: "--> Falta tipo de mensaje"}}
			}
		});
}