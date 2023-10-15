const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Categories } = require('../../models');

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
	res.render('menu', {

	});
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
	res.render('team', {

	});
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