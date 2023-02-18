/** @format */

const mongoose = require('mongoose');
const candidateSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	phone: {
		type: Number,
		required: true,
		unique: true,
	},
	about: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

const Register = new mongoose.model('Submit', candidateSchema);

module.exports = Submit;
