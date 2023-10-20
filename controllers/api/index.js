const router = require('express').Router();

const menuRoutes = require('./menu');
router.use('/menu', menuRoutes);

const teamRoutes = require('./menu');
router.use('/team', teamRoutes);

module.exports = router;