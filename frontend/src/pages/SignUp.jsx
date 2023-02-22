import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import axios from "axios";
import CryptoJS, { SHA256 } from "crypto-js";

export default function SignUp() {
	const navigate = useNavigate();

	const defaultData = {
		nama_lengkap: null,
		username: null,
		email: null,
		password: null,
		umur: null,
	};

	const encryptPass = function (password) {
		const passwordHash = SHA256(password);
		return passwordHash.toString(CryptoJS.enc.Base64);
	};

	const [data, setData] = useState(defaultData);

	const handleSubmit = (e) => {
		e.preventDefault();
		const sendData = async () => {
			try {
				const send = await axios.post(
					`http://localhost:3000/users/signup`,
					{
						nama_lengkap: data.nama_lengkap,
						username: data.username,
						password: encryptPass(data.password),
						umur: Number(data.umur),
						email: data.email,
					},
					{ headers: { "content-type": "application/json" } }
				);

				const data2 = await send.data;
				console.log(data2);
			} catch (error) {
				console.log(error);
			}
		};

		sendData();
		navigate("/login");
	};

	const handleChange = (e) => {
		let val = e.target.value;

		setData((prevState) => {
			return { ...prevState, [e.target.name]: val };
		});

		console.log(val);
		console.log(data);
	};
	return (
		<div className="login">
			<Form method="post" onSubmit={handleSubmit}>
				<label htmlFor="username">
					<span>User Name</span>
					<input type="text" name="username" required onChange={handleChange} />
				</label>

				<label htmlFor="nama_lengkap">
					<span>Nama Lengkap</span>
					<input type="text" name="nama_lengkap" required onChange={handleChange} />
				</label>

				<label htmlFor="umur">
					<span>Umur</span>
					<input type="number" name="umur" required onChange={handleChange} />
				</label>

				<label htmlFor="email">
					<span>Email</span>
					<input type="email" name="email" required onChange={handleChange} />
				</label>

				<label htmlFor="password">
					<span>Password</span>
					<input type="password" name="password" required onChange={handleChange} />
				</label>

				<button type="submit">Sign Up</button>
			</Form>
		</div>
	);
}
