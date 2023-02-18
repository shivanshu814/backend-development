/** @format */

const express = require('express');
const path = require('path');
const app = express();
require('./db/conn');

const port = process.env.PORT || 5000;

//connect to html page

const static_path = path.join(__dirname, '../public');
app.use(express.static(static_path));

app.get('/', (req, res) => {
	res.send('hello Myself Shivanshu Pathak');
});

app.listen(port, () => {
	console.log(`server is running at port no ${port}`);
});
