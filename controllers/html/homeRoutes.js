const router = require('express').Router();

const { 
	Categories, 
	Dressings, 
	Employees, //
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
	HomePage,
	Location,

	Addons
} = require('../../models');

const withAuth = require('../../utils/auth');
const isAdmin = require('../../utils/admin');

// Route to find home page
router.get('/', async (req, res) => {
	try {
		const h = await HomePage.findAll();
		const serializedHomePage = h.map((x) => x.get({ plain: true }));
		const i = await Information.findAll();
		const serializedInfo = i.map((x) => x.get({ plain: true }));

		res.status(200).render('home', {
			loggedIn: req.session.loggedIn, 
			name: req.session.name,
			homePage: serializedHomePage,
			information: serializedInfo
		});
	}	
	catch (error) {
		console.log(error);
		res.status(500).json(error);// 500 - internal server error
	}
});

// Route to find menu
router.get('/menu', async (req, res) => {
	try {
		const i = await Categories.findAll({ include: [{ model: MenuItems }] });	
		const serializedItems = i.map((x) => x.get({ plain: true }));

		res.status(200).render('menu', {
			loggedIn: req.session.loggedIn, 
			name: req.session.name,
			items: serializedItems
		});
	}
	catch (error) {
		console.log(error);
		res.status(500).json(error);// 500 - internal server error
	}
});

// Route to find a single menu item
router.get('/menu/:menuitemsId', async (req, res) => {
	try {
		const i = await MenuItems.findByPk(req.params.menuitemsId, {
			include: [{ model: Categories }]});
		const serializedItem = i.get({ plain: true });
		const d = await Dressings.findAll();
		const serializedDressings = d.map((x) => x.get({ plain: true }));
		const m = await Marinaras.findAll();
		const serializedMarinaras = m.map((x) => x.get({ plain: true }));
		const p = await Pastas.findAll();
		const serializedPastas = p.map((x) => x.get({ plain: true }));
		const s = await Sauces.findAll();
		const serializedSauces = s.map((x) => x.get({ plain: true })); 
		const sd = await SaucesDesert.findAll();
		const serializedSaucesDesert = sd.map((x) => x.get({ plain: true })); 
		const tcp = await ToppingsColdSub.findAll();
		const serializedToppingsColdSub = tcp.map((x) => x.get({ plain: true }));
		const td = await ToppingsDesert.findAll();
		const serializedToppingsDesert = td.map((x) => x.get({ plain: true }));
		const ths = await ToppingsHotSub.findAll();
		const serializedToppingsHotSub = ths.map((x) => x.get({ plain: true }));
		const tp = await ToppingsPremium.findAll();	
		const serializedtoppingsPremium = tp.map((x) => x.get({ plain: true }));
		const tr = await ToppingsRegular.findAll();	
		const serializedtoppingsRegular = tr.map((x) => x.get({ plain: true }));
		
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
		res.status(500).json(error);// 500 - internal server error
	}
});

// Route to add a menu item
router.get('/menuitems/create', withAuth, isAdmin, async (req, res) => {
  try {
    const c = await Categories.findAll();
    const serializedCats = c.map((x) => x.get({ plain: true }));
    const i = await MenuItems.findAll();
    const serializeditems = i.map((x) => x.get({ plain: true }));

    res.status(200).render('create-menu-item', {
			serializedCats, 
      serializeditems,
			loggedIn: req.session.loggedIn, 
			name: req.session.name
    });
  } 
  catch (error) {
    console.log(error);
    res.status(500).json(error);// 500 - internal server error
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
		res.status(500).json(error);// 500 - internal server error
	};
});

// Route to update addons for menu items
router.get('/addons', withAuth, isAdmin, async (req, res) => {
	try {
		


		res.status(200).render('update-addons', {
			loggedIn: req.session.loggedIn, 
			name: req.session.name,


		});
	}
	catch (error) {
		console.log(error);
		res.status(500).json(error);// 500 - internal server error
	}
});

router.get('/location', async (req, res) => {
	try {
		const x = await Hours.findAll();
		const serializedHours = x.map((x) => x.get({plain: true}));

		const i = await Information.findAll();
		const serializedInfo = i.map((x) => x.get({plain: true}));

		const l = await Location.findAll();
		const serializedLocation = l.map((x) => x.get({plain: true}));

		res.status(200).render('location', {
			loggedIn: req.session.loggedIn, 
			name: req.session.name,

			hours: serializedHours,
			information: serializedInfo,
			location: serializedLocation
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

// Route to find about
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

// Route to employee login
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

//Route to update information
router.get('/information/update/:infoId', withAuth, async (req, res) => {
	try {
		const information = await Information.findOne({
			where: {
				id: req.params.infoId,
			}
		});
		
		const info = information.get({ plain: true });

		res.status(200).render('update-information', {
			info,
			loggedIn: req.session.loggedIn,
			name: req.session.name,
		});
	}
	catch (error) {
		console.log(error);
		res.status(500).json(error); // 500 - internal server error
	};
});

//Route to uppdate home
router.get('/home/update/:homeId', withAuth, async (req, res) => {
	try {
		const home = await HomePage.findOne({
			where: {
				id: req.params.homeId
			}
		});

		const x =	home.get({ plain: true});

		res.status(200).render('update-home', {
			x,
			loggedIn: req.session.loggedIn,
			name: req.session.name,
		})
	}
	catch (error) {
		console.log(error);
		res.status(500).json(error); // 500 - internal server error
	};
});

module.exports = router;