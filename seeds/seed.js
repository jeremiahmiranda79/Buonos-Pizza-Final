const sequelize = require('../config/connection');

const { Categories, Items } = require('../models');

const categoryData = require('./categoryData.json');
const itemData = require('./itemData.json');

const seedData = async () => {
    await sequelize.sync({ force:true });

    await Categories.bulkCreate(categoryData);
    await Items.bulkCreate(itemData);

    console.log('All seeded!')
    process.exit(0);
};

seedData();