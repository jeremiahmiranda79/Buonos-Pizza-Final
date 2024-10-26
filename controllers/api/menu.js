const router = require('express').Router();
const { 
  Categories, 
  Dressings, 
  MenuItems, 
  Pastas, 
  SaucesDesert, 
  ToppingsColdSub, 
  ToppingsDesert,
  ToppingsHotSub, 
  Hours,
  // ToppingsPizzaFull,
  ToppingsPizza
} = require('../../models');

/***** READ *****/
// Route to retrieve all categories and associated menu items
// Get method with endpoints '/api/menu'
router.get('/', async (req, res) => {
  try {
    const menu = await Categories.findAll({
      include: [
        { 
          model: MenuItems 
        }],
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
        { model: Dressings },
        { model: Pastas }, 
        { model: SaucesDesert },
        { model: ToppingsColdSub },
        { model: ToppingsDesert },  
        { model: ToppingsHotSub },

        // { model: MenuItems}
        { model: ToppingsPizza }
      ],
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


//* Initialization for router.post('upload-category')
//! Move these to somewhere better
// Import necessary libraries
const fs = require('fs-extra');
const path = require('path');
const multer = require('multer');

// Define storage utility structure
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/photo-bucket/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Define upload function
const upload = multer({ storage: storage });

//* Route to upload new Category image
//* Post method with endpoint '/api/menu/upload-category'
router.post('/upload-category', upload.single('file'), (req, res) => {
  // Move file to correct folder
  fs.move('public/images/photo-bucket/' + req.file.filename, 'public/images/menu-categories/' + req.file.filename);

  res.status(200).json({filename: req.file.filename});
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

      switchy: req.body.switchy,


      size1: req.body.size1,
      price1: req.body.price1,

      size2: req.body.size2,
      price2: req.body.price2,

      size3: req.body.size3,
      price3: req.body.price3,

      toppingPizzaFull: req.body.toppingPizzaFull,

      toppingPizzaSlice: req.body.toppingPizzaSlice,

      toppingPizzaGlutenFree: req.body.toppingPizzaGlutenFree,

      toppingHotSub: req.body.toppingHotSub,

      toppingColdSub: req.body.toppingColdSub,

      toppingDesert: req.body.toppingDesert,

      saladDressing: req.body.saladDressing,

      wingSauce: req.body.wingSauce,

      pastaType: req.body.pastaType,

      marinaraSauce: req.body.marinaraSauce,

      desertSauce: req.body.desertSauce,

      desertType: req.body.desertType,

      stuffingCalzone: req.body.stuffingCalzone,

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
      }
    });

    if (!deletedMenuItem) return res.status(404).json({ message: 'No menu item found.' }); // 404 - Not Found
    res.status(202).json(deletedMenuItem);
  } 
  catch (error) {
    console.log(error);
    res.status(500).json(error); // 500 - internal server error
  };
});

router.get('/hours', async (req, res) => {
  try {
    const menu = await Hours.findAll({
      include: [{ model: Hours }]
    });

    res.status(200).json(menu);
  }
  catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;