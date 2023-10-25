const router = require('express').Router();

const menuRoutes = require('./menu');
router.use('/menu', menuRoutes);

module.exports = router;