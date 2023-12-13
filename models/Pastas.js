const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');

class Pastas extends Model {};

Pastas.init(
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
    modelName: 'pastas'
  }
);

module.exports = Pastas;