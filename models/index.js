const Categories = require('./Categories');
const MenuItems = require('./MenuItems');

const ToppingsRegular = require('./ToppingsRegular');
const ToppingsPremium = require('./ToppingsPremium');

const Employees = require('./Employees');
const Images = require('./Images');

const SizePizzaNeapolitan = require('./SizePizzaNeapolitan');

const Dressings = require('./Dressings');

const Sauces = require('./Sauces');

// MenuItems to Categories
Categories.hasMany(MenuItems, {
  foreignKey: 'categoryId'
});

MenuItems.belongsTo(Categories, {
  foreignKey: 'categoryId'
});

module.exports = { Categories, MenuItems, ToppingsRegular, ToppingsPremium, Employees, Images, SizePizzaNeapolitan, Dressings, Sauces };