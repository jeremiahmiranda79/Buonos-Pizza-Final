const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');

class Items extends Model {};

const categories_model = 'categories_model';
const id = 'id'; 
const items_model = 'items_model';

Items.init(
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
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: categories_model,
        key: id
      }
    }
  },
  {
    sequelize: connection,
    timestamps: true,
    freezeTableName: true,
    modelName: items_model
  }
);

module.exports = Items;