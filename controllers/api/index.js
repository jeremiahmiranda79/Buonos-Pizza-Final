const router = require('express').Router();

const menuRoutes = require('./menu');
router.use('/menu', menuRoutes);

const employeeRoutes = require('./employee');
router.use('/employee', employeeRoutes);

module.exports = router;