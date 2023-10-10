const sequelize = require('../config/connection');
const { Categories } = require('../models');
const categoryData = require('./categoryData.json');

const seedData = async () => {
  await sequelize.sync({force:true});

  await Categories.bulkCreate(categoryData);

  console.log('All seeded!')
  process.exit(0);
};

seedData();