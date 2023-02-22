import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import axios from "axios";

export default function Dashboard() {
	const { isLoading, username } = useSelector((store) => store.user);

	const [user, setUser] = useState({});

	useEffect(() => {
		const getData = async function (username) {
			const res = await axios.get(`http://localhost:3000/users/profile/${username}`);
			const data = await res.data;
			console.log(username);
			console.log("dari useeff");
			console.log(data);

			setUser(data);
		};

		getData(username);
	}, [isLoading, username]);

	console.log(user.username);

	if (isLoading) {
		return <h2>Login atau Sign Up Terlebih dahulu, Daftar Produk bisa diakses tanpa login</h2>;
	}

	return (
		<div className="listProducts">
			<h2>Halo, nama lengkap saya {user.nama_lengkap}</h2>
			<h2>Saya berumur {user.umur} tahun</h2>
			<h2>Username saya : {user.username}</h2>
			<h2>Email saya : {user.email}</h2>
		</div>
	);
}

export const loaderDashboard = async ({ params }) => {
	const res = await axios.get(`http://localhost:3000/users/${params.username}`);
	return await res.data;
};
