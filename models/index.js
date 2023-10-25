const Categories = require('./Categories');
const MenuItems = require('./MenuItems');
const Toppings = require('./Toppings');

// MenuItems to Categories
Categories.hasMany(MenuItems, {
  foreignKey: 'categoryId'
})

MenuItems.belongsTo(Categories, {
  foreignKey: 'categoryId'
})

module.exports = { Categories, MenuItems, Toppings };