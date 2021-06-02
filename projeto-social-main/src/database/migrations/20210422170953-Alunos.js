'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Alunos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      matricula: {
        type: Sequelize.STRING(25),
        unique: true
      },
      nome: {
        type: Sequelize.STRING(60),
      },
      endereco: {
        type: Sequelize.STRING(100)
      },
      telefone: {
        type: Sequelize.STRING(13)
      },
      nacionalidade: {
        type: Sequelize.STRING(30)
      },
      estado: {
        type: Sequelize.STRING(30)
      },
      cidade: {
        type: Sequelize.STRING(150)
      },
      nascimento: {
        type: Sequelize.STRING(10)
      },
      sexo: {
        type: Sequelize.STRING(9)
      },
      obs: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('Alunos');
  }
};