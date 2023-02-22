const User = require("../models/user.model");

const loginController = async function (req, res, next) {
	try {
		console.log(req.sessionID);
		const username = req.body.username;
		const password = req.body.password;

		const user = await User.findOne({ username: username, password: password });

		res.status(200).json({
			username: user.username,
			umur: user.umur,
			nama_lengkap: user.nama_lengkap,
			email: user.email,
			session: req.sessionID,
		});
	} catch (error) {
		res.status(400).json(error);
	}
};

const signupController = async function (req, res, next) {
	try {
		const { email, username } = req.body;
		console.log("ini email", email);
		console.log("ini usernma", username);

		const newUser = new User(req.body);
		const savedUser = await newUser.save();

		res.status(200).json({ message: "User berhasil dibuat" });
	} catch (error) {
		res.json({ message: "Terjadi kesalahan" });
	}
};

const profileController = async function (req, res, next) {
	try {
		const { username } = req.params;
		const user = await User.findOne({ username: username });
		console.log(req.params);
		console.log(req.username);
		console.log(user.username);

		res.status(200).json({
			username: user.username,
			umur: user.umur,
			nama_lengkap: user.nama_lengkap,
			email: user.email,
		});
	} catch (error) {
		res.json({ message: "error" });
	}
};

module.exports = {
	loginController,
	signupController,
	profileController,
};
