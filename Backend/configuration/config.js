
const Sequelize = require('sequelize');
sequelize = new Sequelize('firebasedb', 'abdi', 'abdiabdi123', {dialect:  'mysql'});

module.exports= sequelize;

  
 