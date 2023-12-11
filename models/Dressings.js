const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');

class Dressings extends Model {};

Dressings.init(
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
    modelName: 'dressings'
  }
);

module.exports = Dressings;