'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');


const SchemaKey = {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  key: DataTypes.STRING,
  user_id: {
    type: DataTypes.INTEGER
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
module.exports ={ 
  SchemaKey,
  func(sequelize, DataTypes) {
  class Key extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasOne(Key, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      })
      Key.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      })
    }
  }
  Key.init(SchemaKey, {
    sequelize,
    modelName: 'Key',
  });
  return Key;
}};