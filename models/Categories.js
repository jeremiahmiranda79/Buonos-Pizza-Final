const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');

class Categories extends Model {};

const categories_model = 'categories_model';

Categories.init(
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
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: connection,
    timestamps: true,
    freezeTableName: true,
    modelName: categories_model
  }
);

module.exports = Categories;