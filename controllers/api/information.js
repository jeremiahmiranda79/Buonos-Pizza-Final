// const router = require('express').Router();
// // const sequelize = require('../../config/connection');
// const { Information } = require('../../models');

// /***** READ ******/
// // Route to retireve all Information
// // GET method with endpoint '/api/information'
// router.get('/', async (req, res) => {
//   try {
//     const allInformation = await Information.findAll();
//     res.status(200).json(allInformation);
//   }
//   catch (error) {
//     console.log(error);
//     res.status(500).json(error);
//   }
// });

// module.exports = router;