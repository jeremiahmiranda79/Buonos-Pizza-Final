const Categories = require('./Categories');
const MenuItems = require('./MenuItems');
const ToppingsRegular = require('./ToppingsRegular');
const ToppingsPremium = require('./ToppingsPremium');
const ToppingsHotSub = require('./ToppingsHotSub');
const ToppingsColdSub = require('./ToppingsColdSub');
const ToppingsDesert = require('./ToppingsDesert');
const Employees = require('./Employees');
const Images = require('./Images');
const Dressings = require('./Dressings');
const Sauces = require('./Sauces');
const SaucesDesert = require('./SaucesDesert');
const Pastas = require('./Pastas');
const Marinaras = require('./Marinaras');

const Information = require('./Information');
const HomePage = require('./HomePage');
const Hours = require('./Hours');

const Location = require('./Location');

// MenuItems to Categories
Categories.hasMany(MenuItems, {
  foreignKey: 'categoryId'
});

MenuItems.belongsTo(Categories, {
  foreignKey: 'categoryId'
});

module.exports = { 
  Categories, 
  MenuItems, 
  ToppingsRegular, 
  ToppingsPremium, 
  ToppingsHotSub, 
  ToppingsColdSub, 
  ToppingsDesert,
  Employees, 
  Images, 
  Dressings, 
  Sauces, 
  SaucesDesert,
  Pastas, 
  Marinaras,
  
  Information,
  HomePage,
  Hours,

  Location
};