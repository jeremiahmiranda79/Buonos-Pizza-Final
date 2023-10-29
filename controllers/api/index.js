const router = require('express').Router();

const menuRoutes = require('./menu');
const employeeRoutes = require('./employee');

router.use('/menu', menuRoutes);
router.use('/employee', employeeRoutes);

module.exports = router;