'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');

const SchemaPlayer = {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING
}

module.exports = {
  SchemaPlayer,
  func(sequelize, DataTypes) {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Player.init(SchemaPlayer, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
}}