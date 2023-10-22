const router = require('express').Router();

const sequelize = require('../../config/connection');

const { Categories, Items } = require('../../models');

router.get('/items', async (req, res) => {
  try {
    const items = await Categories.findAll({
      include: [{
        model: Items
      }]
    });

    res.status(200).json(items);
  }
  catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get('/:itemId', async (req, res) => {
  try {
    const item = await Items.findByPk(req.params.itemId, {
      include: [
        { model: Categories }
      ]
    });
    
    res.status(200).json(item);
  } 
  catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
})

module.exports = router;