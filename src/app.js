/** @format */

const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

require('./db/conn');
// const Submit = require('./models/registers');

const port = process.env.PORT || 5000;

const static_path = path.join(__dirname, '../public');
const template_path = path.join(__dirname, '../templates/views');
const partials_path = path.join(__dirname, '../templates/partials');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.get('/', (req, res) => {
	res.render('index');
});

app.post('/', (req, res) => {
	try {
		const savecandidatedata = new Submit({
			dbname: req.body.name,
			dbemail: req.body.email,
			dbphone: req.body.phone,
			dbabout: req.body.about,
			dbpassword: req.body.password,
			l,
		});

		// console.log(req.body.email);
		// console.log(req.body.phone);
		// console.log(req.body.about);
		// console.log(req.body.password);

		//getting output in terminal
		// res.send(req.body.name);
		// res.send(req.body.email);
		// res.send(req.body.phone);
		// res.send(req.body.about);
		// res.send(req.body.password);
	} catch (error) {
		res.status(400).send(error);
	}
});

app.get('/contact', (req, res) => {
	res.render('contact');
});

app.get('/product', (req, res) => {
	res.render('product');
});

app.get('/about us', (req, res) => {
	res.render('about us');
});

app.listen(port, () => {
	console.log(`server is running at port no ${port}`);
});
