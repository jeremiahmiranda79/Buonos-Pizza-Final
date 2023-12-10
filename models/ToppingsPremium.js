const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');

class ToppingsPremium extends Model {};

ToppingsPremium.init(
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
    modelName: 'toppingsPremium'
  }
);

module.exports = ToppingsPremium;