'use strict';
const { Model } = require('sequelize');
const {Aluno} = require('./Aluno')

module.exports = (sequelize, DataTypes) => {
  class Responsavel extends Model {
    static associate(models) {
      this.belongsTo(Aluno, {foreignKey: 'aluno_id'})
    }
  };
  Responsavel.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    aluno_id: {
      type: DataTypes.STRING(25),
      unique: true
    },
    nome: {
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
      type: DataTypes.DATE
    },
    trabalho_local: {
      type: DataTypes.STRING(255)
    }
  }, {
    sequelize,
    modelName: 'Responsaveis',
  });
  return Responsavel;
};