'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');

const SchemaUser = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: {
      args: true,
      msg: "El email ya existe"
    },
    validate: {
      isEmail: true
    }
  
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}
module.exports = {
  SchemaUser,
  func(sequelize, DataTypes) {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(SchemaUser , {
    sequelize,
    modelName: 'User',
    timestamps: true,
    createdAt: true
  });
  return User;
}}