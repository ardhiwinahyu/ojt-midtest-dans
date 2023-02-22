import React from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import axios from "axios";

export default function SingleProduct() {
	//	const { id } = useParams();
	const productDetail = useLoaderData();

	return (
		<div className="listProducts">
			<h2>Produk Detail</h2>
			<div className="box-products">
				<ul>
					<li>ID : {productDetail.id}</li>
					<li>{productDetail.title}</li>
					<li>Brand: {productDetail.brand}</li>
					<li>Kategori: {productDetail.category}</li>
					<li>Deskripsi : {productDetail.description}</li>
					<li>Harga : ${productDetail.price}</li>
					<li>Rating :{productDetail.rating}</li>
					<li>Diskon :{productDetail.discountPercentage}%</li>
					<li>Stok : {productDetail.stock}</li>
					<ul>
						{productDetail.images.map((item, number) => {
							return (
								<li key={number}>
									<img src={item} alt="Photo" />
								</li>
							);
						})}
					</ul>
				</ul>
			</div>
		</div>
	);
}
