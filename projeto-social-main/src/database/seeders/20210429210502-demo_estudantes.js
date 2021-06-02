'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Cadastro_Estudantes', [{
      matricula: '123456',
      nome: 'Matheus Felipe',
      endereco: 'Rua da Física, emc2',
      telefone: '5585940028922',
      nacionalidade: 'Brasileiro',
      estado: 'Ceará',
      cidade: 'Fortaleza',
      nascimento: '2002-11-30',
      sexo: 'Masculino',
      obs: 'Não deixe livros de física perto dele, ou ele irá começar a estudar e só vai parar se argumentar com ele para que pare'
     }], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Cadastro_Estudantes', null, {});

  }
};
