const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Term = sequelize.define('Term', {
  language_code: {
    type: DataTypes.STRING(5),
    allowNull: false
  },
  title: {
    type: DataTypes.STRING
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'terms',
  timestamps: false
});

module.exports = Term;