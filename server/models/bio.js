const Sequelize = require('sequelize');
const db = require('./db')

const Bio = db.define('bio', {
  firstname: {
    type: Sequelize.STRING,
  },
  lastname: {
    type: Sequelize.STRING,
  },
  self: {
    type: Sequelize.TEXT,
  }
}, {})

module.exports = Bio;
