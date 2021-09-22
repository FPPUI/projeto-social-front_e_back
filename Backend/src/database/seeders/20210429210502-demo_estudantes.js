'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Alunos', [{
      matricula: '123456',
      nome: 'Matheus Felipe',
      nome_responsavel: 'Resp1',
      endereco: 'Rua da Física, emc2',
      telefone: '5585940028922',
      nacionalidade: 'Brasileiro',
      estado: 'Ceará',
      cidade: 'Fortaleza',
      nascimento: '2002-11-30',
      sexo: 'Masculino',
      nis: '12345678901',
      vacina: 'Tem',
      bolsa_familia: 'Não Tem',
      obs: 'Não deixe livros de física perto dele, ou ele irá começar a estudar e só vai parar se argumentar com ele para que pare'
     },{
      matricula: '123457',
      nome: 'Matheus',
      nome_responsavel: 'Resp2',
      endereco: 'Rua F, 232',
      telefone: '5585940028923',
      nacionalidade: 'Brasileiro',
      estado: 'Ceará',
      cidade: 'Fortaleza',
      nascimento: '2002-12-30',
      sexo: 'Masculino',
      nis: '12345678902',
      vacina: 'Não Tem',
      bolsa_familia: 'Tem',
      obs: 'Nenhum'
     },{
      matricula: '123457',
      nome: 'Gabriela',
      nome_responsavel: 'Resp3',
      endereco: 'Rua da Matematica, 11212',
      telefone: '5585940028924',
      nacionalidade: 'Brasileiro',
      estado: 'Ceará',
      cidade: 'Fortaleza',
      nascimento: '2002-10-30',
      sexo: 'Feminino',
      nis: '12345678903',
      vacina: 'Tem',
      bolsa_familia: 'Tem',
      obs: 'Alergia a abelhas'
     }], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Alunos', null, {});

  }
};
