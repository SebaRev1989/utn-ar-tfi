module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Chat',
		{
			idSender: {
				type: DataTypes.INTEGER,
				validate: { notEmpty: {msg: "--> Falta id de emisor"}}
			},
			idReciver: {
				type: DataTypes.INTEGER,
				validate: { notEmpty: {msg: "--> Falta id de destinatario"}}
			},
			tema: {
				type: DataTypes.STRING,
				validate: { notEmpty: {msg: "--> Falta tema"}}
			}
		});
}