const express = require("express");
const app = express();
const session = require("express-session");
var cookieParser = require("cookie-parser");
const { client } = require("./controllers/products.contoller");
const productsRoute = require("./routes/products.route");
const userRoute = require("./routes/users.route");
const { default: mongoose } = require("mongoose");

mongoose
	.connect("mongodb://127.0.0.1:27017/dataUser", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.catch((error) => {
		console.log("halo", error);
		return handleError(error);
	});

//Connect Redis
client.on("error", (err) => console.log("Redis Client Error", err));
(async () => {
	await client.connect();
})();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function (req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");

	res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

	res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader("Access-Control-Allow-Credentials", true);

	next();
});

app.use(
	session({
		secret: "rahasia",
		cookie: { maxAge: 3600000 },
		saveUninitialized: false,
	})
);
app.use("/products", productsRoute);
app.use("/users", userRoute);

app.listen(3000, () => {
	console.log("Hemlo");
});
