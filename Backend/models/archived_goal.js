const Sequelize = require('sequelize');
const sequelize = require('../configuration/config');

// define sequlize Model

const archived_goal = sequelize.define('archived_goal', {
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Description: {
    type: Sequelize.STRING,
    allowNull: false,
  }
},
  {timestamps:false});

module.exports = archived_goal;
