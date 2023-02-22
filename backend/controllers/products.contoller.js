const { createClient } = require("redis");
const { getProducts, getOneProduct } = require("../modules/http/axios");

const client = createClient();
const EXPIRED_IN = 3000;

const getAllProducts = async function (req, res, next) {
	try {
		let data = await client.get("products");
		let products;
		if (data) {
			console.log("PAKAI REDIS");
			return res.json(JSON.parse(data));
		} else {
			products = await getProducts();
			client.setEx("products", EXPIRED_IN, JSON.stringify(products));
			console.log("LANGSUNG API");
			return res.json(products);
		}
	} catch (error) {
		console.log(error);
		res.status(404).json({ message: "Maaf yang anda cari tidak ada" });
	}
};

const getSingleProduct = async function (req, res, next) {
	try {
		const { id } = req.params;
		let data = await client.get(`product/${id}`);
		let product;
		if (data) {
			console.log("PAKAI REDIS SINGLE");
			return res.json(JSON.parse(data));
		} else {
			product = await getOneProduct(id);
			client.setEx(`product/${id}`, EXPIRED_IN, JSON.stringify(product));
			console.log("LANGSUNG API SINGLE");
			return res.json(product);
		}
	} catch (error) {
		console.log(error);
		res.status(404).json({ message: "Maaf yang anda cari tidak ada" });
	}
};

module.exports = {
	getAllProducts,
	getSingleProduct,
	client,
};
