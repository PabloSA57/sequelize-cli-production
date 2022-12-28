'use strict';

const { SchemaPlayer } = require("../models/player");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Players', SchemaPlayer);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Players');
  }
};