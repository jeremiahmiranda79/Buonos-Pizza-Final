const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');

class MenuItems extends Model {};

MenuItems.init(
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
        model: 'categories_model',
        key: 'id'
      }
    }
  },
  {
    sequelize: connection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'menuitems_model'
  }
);

module.exports = MenuItems;