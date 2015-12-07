module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Message',
		{
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