const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '1005',
  database: 'workrepair',
  logging: false,
});

module.exports = { db };
