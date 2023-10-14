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

    })
})

router.get('/yelp', async (req, res) => {
    res.render('yelp', {
        
    })
})

router.get('/about', async (req, res) => {
    res.render('about', {
        
    })
})

module.exports = router;