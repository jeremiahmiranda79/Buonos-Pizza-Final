const sequelize = require('../config/connection');

const { 
  Categories, 
  MenuItems, 
  ToppingsPremium, 
  ToppingsRegular, 
  Employees, 
  Images, 
  Dressings,
  Sauces 
} = require('../models');

const categoryData = require('./categoryData.json');
const menuItemData = require('./menuItemData.json');
const toppingRegularData = require('./toppingRegularData.json');
const toppingPremiumData = require('./toppingPremiumData.json');
const employeeData = require('./employeeData.json');
const imageData = require('./imageData.json');
const dressingData = require('./dressingData.json');
const sauceData = require('./sauceData.json');

const seedData = async () => {
  await sequelize.sync({ force: true });

  await Categories.bulkCreate(categoryData);

  await MenuItems.bulkCreate(menuItemData);
  
  await ToppingsPremium.bulkCreate(toppingPremiumData);
  await ToppingsRegular.bulkCreate(toppingRegularData);

  await Employees.bulkCreate(employeeData, { individualHooks:true });

  await Images.bulkCreate(imageData);

  await Dressings.bulkCreate(dressingData);

  await Sauces.bulkCreate(sauceData);

  console.log('All seeded!')
  process.exit(0);
};

seedData();