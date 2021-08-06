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
      cpf_responsavel: {
        type: Sequelize.STRING(11),
      },
      nome_responsavel: {
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
      nis: {
        type: Sequelize.STRING(11)
      },
      vacina: {
        type: Sequelize.STRING(25) // Se tem ou não
      },
      bolsa_familia: {
        type: Sequelize.STRING(25) // Se tem ou não
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
      } // add nis, nº cartão da vacina(se tem ou não o cartão), bolsa familia, telefone do responsável, Estado + cidade , cadastro de ...(cnis?)
    
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Alunos');
  }
};