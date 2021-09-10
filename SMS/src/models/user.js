'use strict';
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		phone: {
			type: DataTypes.STRING,
			allowNull: false
		},
	
		hashedPassword: {
			type: DataTypes.STRING,
			allowNull: true
		},
		salt: {
			type: DataTypes.STRING,
			allowNull: true
		},
	  email:{
      type: DataTypes.STRING,
			allowNull: true
    },
		created: {
			type: DataTypes.DATE,
			allowNull: true
		},
	
	}, {});
	User.associate = function (models) {
		// associations can be defined here
	};
  return User;
};