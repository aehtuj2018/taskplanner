const Sequelize = require('sequelize');
const sequelize = require('../configuration/config');

// define sequlize Model

const note = sequelize.define('Note', {
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Header: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Details: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Importance: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
},
  {timestamps:false});

module.exports = note;
