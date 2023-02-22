const mongoose = require("mongoose");

const User = mongoose.Schema({
	nama_lengkap: {
		type: String,
		required: true,
	},

	username: {
		type: String,
		required: true,
	},

	umur: {
		type: Number,
		required: true,
	},

	password: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("User", User);
