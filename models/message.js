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
			}
		});
}