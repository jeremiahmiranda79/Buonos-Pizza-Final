const router = require('express').Router();

const menuRoutes = require('./menu');
router.use('/menu', menuRoutes);

const employeeRoutes = require('./employee');
router.use('/employee', employeeRoutes);

// const homePageRoutes = require('./hours');
// router.use('/hours', homePageRoutes);



module.exports = router;