const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');

class SizePizzaNeapolitan extends Model {};

SizePizzaNeapolitan.init(
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
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  },
  {
    sequelize: connection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'sizePizzaNeapolitan'
  }
);

module.exports = SizePizzaNeapolitan;