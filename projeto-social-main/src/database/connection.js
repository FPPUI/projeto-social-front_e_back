const { Sequelize } = require('sequelize');
const dbconfig = require('./config/config.js')

const connection = new Sequelize(dbconfig);

module.exports = connection