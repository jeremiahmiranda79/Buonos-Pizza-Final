const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');

class ToppingsDesert extends Model {};

ToppingsDesert.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: connection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'toppingsDesert'
  }
);

module.exports = ToppingsDesert;