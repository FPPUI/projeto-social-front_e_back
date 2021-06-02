'use strict';
const { Model } = require('sequelize');
const Advogado = require('./Advogado')

module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      this.belongsTo(Advogado, {foreignKey: 'advogado_id'})
    }
  };
  Cliente.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    advogado_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING(60),
    },
    endereco: {
      type: DataTypes.STRING(100)
    },
    cpf: {
      type: DataTypes.STRING(11)
    },
    rg: {
      type: DataTypes.STRING(9)
    },
    telefone: {
      type: DataTypes.STRING(13)
    },
    numero_processo: {
      type: DataTypes.STRING(20)
    },
    vara_criminal: {
      type: DataTypes.STRING(40)
    },
    data_acusacao: {
      type: DataTypes.DATE
    },
    informacoes_adicionais: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};