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

module.exports = router;