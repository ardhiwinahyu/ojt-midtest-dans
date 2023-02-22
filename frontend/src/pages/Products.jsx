import React from "react";
import { NavLink, useLoaderData, Link } from "react-router-dom";
import axios from "axios";

export default function Products() {
	const listProducts = useLoaderData();
	console.log(listProducts);

	return (
		<div className="listProducts">
			<h2>Produk Kami</h2>
			{listProducts.map((item) => {
				return (
					<div key={item.id} className="box-mhs">
						<ul>
							<li>
								<Link className="black" to={String(item.id)}>
									{item.id}. {item.title}
								</Link>
							</li>

							<li>Harga : ${item.price}</li>
							<li>Rating :{item.rating}</li>
							<li>
								<img src={item.thumbnail} alt="Thumnail" />
							</li>
						</ul>
					</div>
				);
			})}
		</div>
	);
}

export const loaderProducts = async () => {
	const res = await axios.get("http://localhost:3000/products");
	return await res.data.products;
};
