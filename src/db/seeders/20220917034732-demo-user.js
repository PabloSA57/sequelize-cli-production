'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Angel',
      lastName: 'Sierra',
      email: 'angel@gmail.com',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Ruben',
      lastName: 'Sierra',
      email: 'ruben@gmail.com',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  }
};
