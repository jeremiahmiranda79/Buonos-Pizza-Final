const Categories = require('./Categories');
const Items = require('./Items');

// Items to Categories
const categoryId = 'categoryId';

Categories.hasMany(Items, {
  foreignKey: categoryId
})

Items.belongsTo(Categories, {
  foreignKey: categoryId
})

module.exports = { Categories, Items };