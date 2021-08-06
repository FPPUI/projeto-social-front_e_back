'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Clientes', [{
      advogado_registro_oab: '123456',
      nome: 'Matheus Felipe',
      endereco: 'Rua da Física, emc2',
      cpf: '99900033351',
      rg: '12345678901231',
      telefone: '5585940028921',
      numero_processo: '123',
      vara_criminal: 'Familiar',
      data_acusacao: '2002-11-30',
      informacoes_adicionais: 'Nenhum'
     },{
      advogado_registro_oab: '123457',
      nome: 'Matheus Felipe2',
      endereco: 'Rua da Física2, emc22',
      cpf: '99900033352',
      rg: '12345678901232',
      telefone: '5585940028922',
      numero_processo: '1232',
      vara_criminal: 'Criminal',
      data_acusacao: '2002-11-30',
      informacoes_adicionais: 'Procurado pelo mundo todo, sem familia, algo assim?'
     },{
      advogado_registro_oab: '123458',
      nome: 'Matheus Felipe3',
      endereco: 'Rua da Física3, emc23',
      cpf: '99900033353',
      rg: '12345678901233',
      telefone: '5585940028923',
      numero_processo: '1233',
      vara_criminal: 'Familiar2',
      data_acusacao: '2002-11-30',
      informacoes_adicionais: 'Habeas corpos em processo para o dia xx/xx/xxxx'
     }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Clientes', null, {});

  }
};
