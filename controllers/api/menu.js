const router = require('express').Router();
// const sequelize = require('../../config/connection');
const { Categories, MenuItems, ToppingsPremium, ToppingsRegular, SizePizzaNeapolitan, Dressings, Sauces } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const menu = await Categories.findAll({
      include: [
        { model: MenuItems }
      ]
    });

    res.status(200).json(menu);
  }
  catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get('/:menuitemsId', async (req, res) => {
  try {
    const menuItem = await MenuItems.findByPk(req.params.menuitemsId, {
      include: [
        { model: Categories },
        { model: SizePizzaNeapolitan },
        { model: ToppingsPremium },
        { model: ToppingsRegular },
        { model: Dressings },
        { model: Sauces}
      ]
    });
    
    res.status(200).json(menuItem);
  } 
  catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Route to create new Category
// POST method with endpoint '/api/menu/newcategory'
router.post('/newcategory', async (req, res) => {
  try {
    const newCategory = await Categories.create({
      name: req.body.name,
      image: req.body.image
    });

    res.status(201).json(newCategory);
  } 
  catch (error) {
    console.log(error);
    res.status(500).json(error); // 500 - internal server error
  };
});

// Route to update a Category
// PUT method with endpoint '/api/menu/updateCategory/:categoryId'
router.put('/updateCategory/:categoryId', async (req, res) => {
  try {
    const updatedCategory = await Categories.update(req.body, {
      where: {
        id: req.params.categoryId
      },
    });

    if (!updatedCategory[0]) return res.status(404).json({ message: 'No category found.' }); // 404 - Not Found

    res.status(202).json(updatedCategory);
  } 
  catch (error) {
    console.log(error);
    res.status(500).json(error); // 500 - internal server error
  };
});

// Route to delete a Category
// DELETE method with endpoint '/api/menu/deleteCategory/:categoryId'
router.delete('/deleteCategory/:categoryId', async (req, res) => {
  try {
    const deletedCategory = await Categories.destroy({
      where: {
        id: req.params.categoryId
      },
    });

    console.log(deletedCategory);

    if (!deletedCategory) return res.status(404).json({ message: 'No category found.' }); // 404 - Not Found

    res.status(202).json(deletedCategory);
  } 
  catch (error) {
    console.log(error);
    res.status(500).json(error); // 500 - internal server error
  };
});

/***** CREATE ******/
// Route to create new Menu Item
// POST method with endpoint '/api/menu/newitem'
router.post('/newitem', async (req, res) => {
  try {
    const newMenuItem = await MenuItems.create({
      name: req.body.name,
      description: req.body.description,
      categoryId: req.body.categoryId,
    });

    res.status(201).json(newMenuItem);
  } 
  catch (error) {
    console.log(error);
    res.status(500).json(error); // 500 - internal server error
  };
});

/***** UPDATE ******/
// Route to update a Menu Item
// PUT method with endpoint '/api/menu/updateMenuItem/:menuItemId'
router.put('/updateMenuItem/:menuItemId', async (req, res) => {
  try {
    const updatedMenuItem = await MenuItems.update(req.body, {
      where: {
        id: req.params.menuItemId
      },
    });

    console.log(updatedMenuItem);

    if (!updatedMenuItem[0]) return res.status(404).json({ message: 'No menu item found.' }); // 404 - Not Found

    res.status(202).json(updatedMenuItem);
  } 
  catch (error) {
    console.log(error);
    res.status(500).json(error); // 500 - internal server error
  };
});

/***** DELETE ******/
// Route to delete a Menu Item
// DELETE method with endpoint '/api/menu/deleteMenuItem/:menuItemId'
router.delete('/deleteMenuItem/:menuItemId', async (req, res) => {
  try {
    const deletedMenuItem = await MenuItems.destroy({
      where: {
        id: req.params.menuItemId
      },
    });

    console.log(deletedMenuItem);

    if (!deletedMenuItem) return res.status(404).json({ message: 'No menu item found.' }); // 404 - Not Found

    res.status(202).json(deletedMenuItem);
  } 
  catch (error) {
    console.log(error);
    res.status(500).json(error); // 500 - internal server error
  };
});

module.exports = router;