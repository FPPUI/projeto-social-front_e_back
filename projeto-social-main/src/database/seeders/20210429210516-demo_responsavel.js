'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Responsaveis', [{
      nome: 'Matheus Felipe',
      endereco: 'Rua da Física, emc2',
      telefone: '5585940028922',
      cpf: '99900033351',
      rg: '12345678901231',
      nacionalidade: 'Brasileiro',
      estado: 'Ceará',
      cidade: 'Fortaleza',
      nascimento: '2002-11-30',
      sexo: 'Masculino',
      trabalho_local: 'Lojas Brasileiras',
      dados_extras: 'Nenhum'
     },{
      nome: 'Matheus Felipe2',
      endereco: 'Rua da Física2, emc22',
      telefone: '5585940028922',
      cpf: '99900033352',
      rg: '12345678901232',
      nacionalidade: 'Brasileiro',
      estado: 'Ceará',
      cidade: 'Fortaleza',
      nascimento: '2002-09-20',
      sexo: 'Masculino',
      trabalho_local: 'Lojas Brasileiras2',
      dados_extras: 'Chega muito tarde, o filho xxxxx pode ir pra casa só?'
     },{
      nome: 'Matheus Felipe3',
      endereco: 'Rua da Física3, emc23',
      telefone: '5585940028923',
      cpf: '99900033353',
      rg: '12345678901233',
      nacionalidade: 'Brasileiro',
      estado: 'Ceará',
      cidade: 'Fortaleza',
      nascimento: '2002-12-10',
      sexo: 'Masculino',
      trabalho_local: 'Lojas Brasileiras3',
      dados_extras: 'Nenhum'
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Responsaveis', null, {});
  }
};
