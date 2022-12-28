'use strict';
const {SchemaKey} = require('../models/key')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Keys', SchemaKey)
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Keys');
  }
};