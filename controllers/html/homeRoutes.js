const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Categories, MenuItems, Toppings } = require('../../models');

// Homepage
router.get('/', async (req, res) => {
	res.render('home', {

	});
});

router.get('/location', async (req, res) => {
	res.render('location', {

	});
});

router.get('/contact', async (req, res) => {
	res.render('contact', {

	});
});

router.get('/menu', async (req, res) => {
	try {
		const items = await Categories.findAll({
			include: [
				{
					model: MenuItems
				}
			]
		});	
			
		const serializedItems = items.map((item) => item.get({ plain: true }));
		res.status(200).render('menu', {
			items: serializedItems
		});
	}
	catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
});

router.get('/menu/:menuitemsId', async (req, res) => {
	try {
		const item = await MenuItems.findByPk(req.params.menuitemsId, {
			include: [
				{ model: Categories},
			]
		});

		const serializedItem = item.get({ plain: true });
		
		res.status(200).render('item-details', {
			item: serializedItem,
		});
	} 
	catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
});

router.get('/about', async (req, res) => {
	res.render('about', {
			
	});
});

router.get('/login', async (req, res) => {
	res.status(200).render('login', {
		
	});
});

module.exports = router;