module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Forum',
		{
			idUser: {
				type: DataTypes.INTEGER,
				validate: { notEmpty: {msg: "--> Falta usuario"}}
			},
			tema: {
				type: DataTypes.STRING,
				validate: { notEmpty: {msg: "--> Falta tema"}}
			}
		});
}