const Sequelize = require('sequelize');
const sequelize = require('../configuration/config');

// define sequlize Model

const tasks = sequelize.define('Task', {
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
  Description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Date_of_Start: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  Date_of_end: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  Status: {
    type: Sequelize.INTEGER,
    allowNull: false,
    
  },
  Is_archived:{
    type: Sequelize.TINYINT,
    allowNull: false,
  }
},
  {timestamps:false});

module.exports = tasks;
