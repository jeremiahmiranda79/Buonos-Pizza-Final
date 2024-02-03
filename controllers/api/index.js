const router = require('express').Router();

const menuRoutes = require('./menu');
router.use('/menu', menuRoutes);

const employeeRoutes = require('./employee');
router.use('/employee', employeeRoutes);

const informationRoutes = require('./information');
router.use('/information', informationRoutes);

const homeRoutes = require('./home');
router.use('/home', homeRoutes);

module.exports = router;