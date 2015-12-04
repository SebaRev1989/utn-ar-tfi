module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Message',
		{
			idSender: {
				type: DataTypes.INTEGER,
				validate: { notEmpty: {msg: "--> Falta id de emisor"}}
			},
			idReciver: {
				type: DataTypes.INTEGER,
				validate: { notEmpty: {msg: "--> Falta id de destinatario"}}
			},
			mensaje: {
				type: DataTypes.TEXT,
				validate: { notEmpty: {msg: "--> Falta mensaje"}}
			},
			recepcion: {type: DataTypes.BOOLEAN}
		});
}