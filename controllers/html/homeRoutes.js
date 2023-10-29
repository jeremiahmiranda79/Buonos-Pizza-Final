const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Categories, MenuItems, Toppings, Employees } = require('../../models');
const withAuth = require('../../utils/auth');
const isAdmin = require('../../utils/admin');

// Homepage
router.get('/', async (req, res) => {
	res.status(200).render('home', {
		loggedIn: req.session.loggedIn, 
		name: req.session.name
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
			loggedIn: req.session.loggedIn, 
			name: req.session.name,

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
			loggedIn: req.session.loggedIn, 
			name: req.session.name,

			item: serializedItem
		});
	} 
	catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
});


router.get('/location', async (req, res) => {
	res.status(200).render('location', {
		loggedIn: req.session.loggedIn, 
		name: req.session.name
	});
});

router.get('/hours', async (req, res) => {
	res.status(200).render('hours', {
		loggedIn: req.session.loggedIn, 
		name: req.session.name
	});
});

router.get('/contact', async (req, res) => {
	res.status(200).render('contact', {
		loggedIn: req.session.loggedIn, 
		name: req.session.name
	});
});

router.get('/about', async (req, res) => {
	res.status(200).render('about', {
		loggedIn: req.session.loggedIn, 
		name: req.session.name
	});
});

router.get('/employee/login', async (req, res) => {
	if (req.session.loggedIn) {
		return res.redirect('../');
	}
	
	res.status(200).render('login', {
		loggedIn: req.session.loggedIn, 
		name: req.session.name
	});
});

module.exports = router;