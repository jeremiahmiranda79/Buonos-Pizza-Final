const router = require('express').Router();

const sequelize = require('../../config/connection');

const { Categories, MenuItems } = require('../../models');

// TODO
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
      ]
    });
    
    res.status(200).json(menuItem);
  } 
  catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
})

module.exports = router;