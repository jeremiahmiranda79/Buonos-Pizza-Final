const sequelize = require('../config/connection');

const { 
  Categories, 
  MenuItems, 
  ToppingsPremium, 
  ToppingsRegular, 
  Employees, 
  Images, 
  Dressings,
  Sauces, 
  SaucesDesert,
  Pastas,
  ToppingsHotSub, 
  ToppingsColdSub,
  ToppingsDesert,

  Marinaras,

  HomePage,
  Information,
  Hours,

  Location
} = require('../models');

const categoryData = require('./categoryData.json');
const menuItemData = require('./menuItemData.json');
const toppingRegularData = require('./toppingRegularData.json');
const toppingPremiumData = require('./toppingPremiumData.json');
const employeeData = require('./employeeData.json');
const imageData = require('./imageData.json');
const dressingData = require('./dressingData.json');

const sauceData = require('./sauceData.json'); 
const sauceDesertData = require('./sauceDesertData.json');

const pastaData = require('./pastaData.json');

const toppingsHotSubData = require('./toppingsHotSubData.json');
const toppingsColdSubData = require('./toppingsColdSubData.json');
const toppingsDesertData = require('./toppingDesertData.json');

const marinarasData = require('./marinaraData.json');

const homePageData = require('./homePageData.json');
const informationData = require('./informationData.json');
const hoursData = require('./hoursData.json');

const locationData = require('./locationData.json');

const seedData = async () => {
  await sequelize.sync({ force: true });

  await Categories.bulkCreate(categoryData);

  await MenuItems.bulkCreate(menuItemData);
  
  await ToppingsPremium.bulkCreate(toppingPremiumData);
  await ToppingsRegular.bulkCreate(toppingRegularData);

  await ToppingsHotSub.bulkCreate(toppingsHotSubData);
  await ToppingsColdSub.bulkCreate(toppingsColdSubData);

  await ToppingsDesert.bulkCreate(toppingsDesertData);

  await Employees.bulkCreate(employeeData, { individualHooks:true });

  await Images.bulkCreate(imageData);

  await Dressings.bulkCreate(dressingData);

  await Sauces.bulkCreate(sauceData);
  await SaucesDesert.bulkCreate(sauceDesertData);

  await Pastas.bulkCreate(pastaData);

  await Marinaras.bulkCreate(marinarasData)

  await HomePage.bulkCreate(homePageData);
  await Information.bulkCreate(informationData);
  await Hours.bulkCreate(hoursData);

  await Location.bulkCreate(locationData);

  console.log('All seeded!')
  process.exit(0);
};

seedData();