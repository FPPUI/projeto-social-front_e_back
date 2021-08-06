'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Advogados', [{
      registro_oab: '123456',
      nome: 'Matheus Felipe',
      endereco: 'Rua da Física, emc2',
      telefone: '5585940028921',
      email: 'matheus@gmail.com',
     },{
      registro_oab: '123457',
      nome: 'Matheus Felipe2',
      endereco: 'Rua da Física2, emc22',
      telefone: '5585940028921',
      email: 'matheus2@gmail.com',
     },{
      registro_oab: '123458',
      nome: 'Matheus Felipe3',
      endereco: 'Rua da Física3, emc23',
      telefone: '5585940028923',
      email: 'matheus3@gmail.com',
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Advogados', null, {});
  }
};
