const Sequelize = require('sequelize');
const sequelize = require('../configuration/config');

// define sequlize Model

const goal = sequelize.define('goal', {
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Is_archived:{
    type: Sequelize.INTEGER,
    allowNull: false,
  }
},
  {timestamps:false});

module.exports = goal;
