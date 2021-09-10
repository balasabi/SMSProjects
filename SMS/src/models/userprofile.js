'use strict';
module.exports = (sequelize, DataTypes) => {
	const UserProfile = sequelize.define('UserProfile', {
		userId: {
			type: DataTypes.STRING,
			allowNull: false
		},	
		phone: {
			type: DataTypes.STRING,
			allowNull: true
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: true
		},
	  lastName:{
      type: DataTypes.STRING,
			allowNull: true
    },
    email:{
      type: DataTypes.STRING,
			allowNull: true
    },
    zipCode:{
      type: DataTypes.STRING,
			allowNull: true
    },
		dateOfBirth: {
			type: DataTypes.DATE,
			allowNull: false
    },
    Gender:{
      type: DataTypes.STRING,
			allowNull: true
    },
    imageStorageKey:{
      type: DataTypes.STRING,
			allowNull: true
    },
    status:{
      type: DataTypes.STRING,
			allowNull: true
    },
    lastLogin:{
      type: DataTypes.DATE,
			allowNull: true
    },
	
	}, {});
	UserProfile.associate = function (models) {
		// associations can be defined here
	};
  return UserProfile;
};