const axios = require("axios");

const instance = axios.create({
	baseURL: "https://dummyjson.com/",
	headers: { "content-type": "application/json" },
});

const getProducts = async () => {
	const products = await instance.get("/products");
	const data = products.data;
	return data;
};

const getOneProduct = async (id) => {
	const products = await instance.get(`/products/${id}`);
	const data = products.data;
	return data;
};

module.exports = {
	getProducts,
	getOneProduct,
};
