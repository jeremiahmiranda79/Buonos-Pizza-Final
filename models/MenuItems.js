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
    size1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    size2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    size3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price3: {
      type: DataTypes.STRING,
      allowNull: true
    },

    addonsDescription1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addonsPrice1: {
      type: DataTypes.STRING,
      allowNull: true
    },

    addonsDescription2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addonsPrice2: {
      type: DataTypes.STRING,
      allowNull: true
    },

    
    
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'id'
      }
    },
  },
  {
    sequelize: connection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'menuitems'
  }
);

module.exports = MenuItems;