const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Categories, Items } = require('../../models');

// Homepage
router.get('/', async (req, res) => {
	res.render('homepage', {
		// loggedIn: req.session.loggedIn, 
		// name: req.session.name
	});
});

router.get('/contact', async (req, res) => {
	res.render('contact', {
		// loggedIn: req.session.loggedIn,
		// name: req.session.name
	});
});

router.get('/menu', async (req, res) => {
	try {
		const items = await Categories.findAll({
			include: [
				{
					model: Items
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

router.get('/yelp', async (req, res) => {
	res.render('yelp', {
			
	});
});

router.get('/about', async (req, res) => {
	res.render('about', {
			
	});
});

router.get('/team', async (req, res) => {
	try {
		const items = await Categories.findAll({
			include: [
				{
					model: Items
				}
			]
		});	
			
		const serializedItems = items.map((item) => item.get({ plain: true }));
		res.status(200).render('team', {
			items: serializedItems
		});
	}
	catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
});

router.get('/score', async (req, res) => {
	res.render('score', {

	});
});

router.get('/login', async (req, res) => {
	// if (req.session.loggedIn) return res.redirect('../');
			res.status(200).render('login');
});

module.exports = router;