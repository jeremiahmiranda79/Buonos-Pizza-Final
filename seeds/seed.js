const sequelize = require('../config/connection');

const { Categories, MenuItems, Toppings, Employees, Images } = require('../models');

const categoryData = require('./categoryData.json');
const menuItemData = require('./menuItemData.json');
const toppingData = require('./toppingData.json');
const employeeData = require('./employeeData.json');
const imageData = require('./imageData.json');

const seedData = async () => {
    await sequelize.sync({ force: true });

    await Categories.bulkCreate(categoryData);
    await MenuItems.bulkCreate(menuItemData);
    await Toppings.bulkCreate(toppingData);
    await Employees.bulkCreate(employeeData, { individualHooks:true });

    await Images.bulkCreate(imageData);

    console.log('All seeded!')
    process.exit(0);
};

seedData();