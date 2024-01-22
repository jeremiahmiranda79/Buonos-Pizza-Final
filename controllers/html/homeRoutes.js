const router = require('express').Router();

const { 
	Categories, 
	Dressings, 
	Employees, 
	Images, 
	Marinaras, 
	MenuItems, 
	Pastas, 
	Sauces, 
	SaucesDesert,
	ToppingsColdSub, 
	ToppingsDesert,
	ToppingsHotSub, 
	ToppingsPremium, 
	ToppingsRegular,

	Hours,
	Information,
	HomePage
} = require('../../models');

const withAuth = require('../../utils/auth');
const isAdmin = require('../../utils/admin');

// Homepage
router.get('/', async (req, res) => {
	try {
		const hp = await HomePage.findAll();
		const serializedHomePage = hp.map((x) => x.get({plain: true}));

		const i = await Information.findAll();
		const serializedInfo = i.map((x) => x.get({plain: true}));

		res.status(200).render('home', {
			loggedIn: req.session.loggedIn, 
			name: req.session.name,
			homePage: serializedHomePage,
			information: serializedInfo
		});
	}	
	catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
});

router.get('/menu', async (req, res) => {
	try {
		const items = await Categories.findAll({
			include: [
				{
					model: MenuItems
				}
			]
		});	
			
		const serializedItems = items.map((item) => item.get({ plain: true }));

		res.status(200).render('menu', {
			loggedIn: req.session.loggedIn, 
			name: req.session.name,

			items: serializedItems
		});
	}
	catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
});

router.get('/menu/:menuitemsId', async (req, res) => {
	try {
		const item = await MenuItems.findByPk(req.params.menuitemsId, {
			include: [
				{ model: Categories }]
		});
		const serializedItem = item.get({ plain: true });

		const dressings = await Dressings.findAll({});
		const serializedDressings = dressings.map((item) => item.get({ plain: true }));

		const marinaras = await Marinaras.findAll({});
		const serializedMarinaras = marinaras.map((item) => item.get({plain: true}));

		const pastas = await Pastas.findAll({});
		const serializedPastas = pastas.map((item) => item.get({ plain: true}));

		const sauces = await Sauces.findAll({});
		const serializedSauces = sauces.map((item) => item.get({ plain: true})); 

		const saucesDesert = await SaucesDesert.findAll({});
		const serializedSaucesDesert = saucesDesert.map((item) => item.get({ plain: true})); 

		const toppingsColdSub = await ToppingsColdSub.findAll({});
		const serializedToppingsColdSub = toppingsColdSub.map((item) => item.get({plain: true}));
		
		const toppingsDesert = await ToppingsDesert.findAll({});
		const serializedToppingsDesert = toppingsDesert.map((item) => item.get({plain: true}));
		
		const toppingsHotSub = await ToppingsHotSub.findAll({});
		const serializedToppingsHotSub = toppingsHotSub.map((item) => item.get({plain: true}));

		const toppingsPremium = await ToppingsPremium.findAll({});	
		const serializedtoppingsPremium = toppingsPremium.map((item) => item.get({ plain: true }));

		const toppingsRegular = await ToppingsRegular.findAll({});	
		const serializedtoppingsRegular = toppingsRegular.map((item) => item.get({ plain: true }));
		
		res.status(200).render('item-details', {
			loggedIn: req.session.loggedIn, 
			name: req.session.name,
			item: serializedItem,
			
			dressing: serializedDressings,
			marinara: serializedMarinaras,
			pasta: serializedPastas,
			sauce: serializedSauces,
			sauceDesert: serializedSaucesDesert,
			toppingsColdSub: serializedToppingsColdSub,
			toppingsDesert: serializedToppingsDesert,
			toppingsHotSub: serializedToppingsHotSub,
			toppingsPremium: serializedtoppingsPremium,
			toppingsRegular: serializedtoppingsRegular,
		});
	} 
	catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
});

// Route to add a menu item
router.get('/menuitems/create', withAuth, isAdmin, async (req, res) => {
  try {
    const categories = await Categories.findAll();
    const menuitems = await MenuItems.findAll();
    const cats = categories.map((cat) => cat.get({ plain: true }));
    const items = menuitems.map((item) => item.get({ plain: true }));

    res.status(200).render('create-menu-item', {
      items, cats, loggedIn: req.session.loggedIn, name: req.session.name
    });
  } 
  catch (error) {
    console.log(error);
    res.status(500).json(error); // 500 - internal server error
  };
});

// Route to update a menu item
router.get('/menuitems/update/:menuitemId', withAuth, isAdmin, async (req, res) => {
	try {
		const categories = await Categories.findAll();
		const menuitem = await MenuItems.findOne({
			where: {
				id: req.params.menuitemId,
			}
		});

		const cats = categories.map((cat) => cat.get({ plain: true }));
		const item = menuitem.get({ plain: true });

		res.status(200).render('update-menu-item', {
			item, cats, loggedIn: req.session.loggedIn, name: req.session.name
		});
	} 
	catch (error) {
		console.log(error);
		res.status(500).json(error); // 500 - internal server error
	};
});

router.get('/location', async (req, res) => {
	try {
		const x = await Hours.findAll();

		const serializedHours = x.map((hour) => hour.get({plain: true}));

		console.log(serializedHours);

		res.status(200).render('location', {
			loggedIn: req.session.loggedIn, 
			name: req.session.name,

			hours: serializedHours
		});
	}
	catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
});

router.get('/hours', async (req, res) => {
	try {
		const x = await Hours.findAll();

		const serializedHours = x.map((hour) => hour.get({plain: true}));

		console.log(serializedHours);

		res.status(200).render('hours', {
			loggedIn: req.session.loggedIn, 
			name: req.session.name,

			hours: serializedHours
		});
	}
	catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
});

router.get('/contact', async (req, res) => {
	try {
		const x = await Hours.findAll();

		const serializedHours = x.map((hour) => hour.get({plain: true}));

		console.log(serializedHours);

		res.status(200).render('contact', {
			loggedIn: req.session.loggedIn, 
			name: req.session.name,

			hours: serializedHours
		});
	}
	catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
});

router.get('/about', async (req, res) => {
	try {
		const x = await Hours.findAll();
		const serializedHours = x.map((hour) => hour.get({plain: true}));

		const info = await Information.findAll();
		const serializedInfo = info.map((info) => info.get({plain: true}));

		res.status(200).render('about', {
			loggedIn: req.session.loggedIn, 
			name: req.session.name,

			hours: serializedHours,
			information: serializedInfo
		});
	}
	catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
});

router.get('/employee/login', async (req, res) => {
	if (req.session.loggedIn) {
		return res.redirect('../');
	}
	
	res.status(200).render('login', {
		loggedIn: req.session.loggedIn, 
		name: req.session.name
	});
});

// Route to add a category
router.get('/categories/create', withAuth, async (req, res) => {
	try {
		const categories = await Categories.findAll();
		const cats = categories.map((x) => x.get({ plain: true }));

		const images = await Images.findAll();
		const imgs = images.map((img) => img.get({ plain: true }));

		res.status(200).render('create-category', {
			cats,
			imgs,
			loggedIn: req.session.loggedIn,
			name: req.session.name
		});
	} 
	catch (error) {
		console.log(error);
		res.status(500).json(error); // 500 - internal server error
	};
});

// Route to update a category
router.get('/categories/update/:catId', withAuth, async (req, res) => {
	try {
		const category = await Categories.findOne({
			where: {
				id: req.params.catId,
			}
		});

		const cat = category.get({ plain: true });

		const images = await Images.findAll();
		const imgs = images.map((img) => img.get({ plain: true }));

		res.status(200).render('update-category', {
			cat,
			imgs,
			loggedIn: req.session.loggedIn,
			name: req.session.name,
		});
	} 
	catch (error) {
		console.log(error);
		res.status(500).json(error); // 500 - internal server error
	};
});

module.exports = router;