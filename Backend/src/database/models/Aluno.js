'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {
    static associate(models) {
      
    }
  };
  Aluno.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    matricula: {
      type: DataTypes.STRING(25),
      unique: true
    },
    nome: {
      type: DataTypes.STRING(60)
    },
    cpf_responsavel: {
      type: DataTypes.STRING(11),
    },
    nome_responsavel: {
      type: DataTypes.STRING(60),
    },
    endereco: {
      type: DataTypes.STRING(100)
    },
    telefone: {
      type: DataTypes.STRING(13)
    },
    nacionalidade: {
      type: DataTypes.STRING(30)
    },
    estado: {
      type: DataTypes.STRING(30)
    },
    cidade: {
      type: DataTypes.STRING(150)
    },
    nascimento: {
      type: DataTypes.STRING(10)
    },
    sexo: {
      type: DataTypes.STRING(9)
    },
    nis: {
      type: DataTypes.STRING(11)
    },
    vacina: {
      type: DataTypes.STRING(25) // Se tem ou não
    },
    bolsa_familia: {
      type: DataTypes.STRING(25) // Se tem ou não
    },
    obs: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Aluno',
  });
  return Aluno;
};