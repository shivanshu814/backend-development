/** @format */

const express = require('express');
const app = express();
require('./db/conn');

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send('hello from thapa technical');
});

app.listen(port, () => {
	console.log(`server is running at port no ${port}`);
});
