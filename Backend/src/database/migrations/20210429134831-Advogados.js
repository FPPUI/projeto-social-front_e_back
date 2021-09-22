'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Advogados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      registro_oab: {
        type: Sequelize.STRING(60),
        unique: true
      },
      nome: {
        type: Sequelize.STRING(60),
      },
      endereco: {
        type: Sequelize.STRING(100),
        unique: true
      },
      telefone: {
        type: Sequelize.STRING(13),
        unique: true
      },
      email: {
        type: Sequelize.STRING(100),
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Advogados');
  }
};