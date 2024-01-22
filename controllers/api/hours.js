// const router = require('express').Router();
// // const sequelize = require('../../config/connection');
// const { Hours } = require('../../models');

// /***** READ ******/
// // Route to retireve all Hours
// // GET method with endpoint '/api/hours'
// router.get('/', async (req, res) => {
//   try {
//     const allHours = await Hours.findAll();
//     res.status(200).json(allHours);
//   }
//   catch (error) {
//     console.log(error);
//     res.status(500).json(error);
//   }
// });

// module.exports = router;