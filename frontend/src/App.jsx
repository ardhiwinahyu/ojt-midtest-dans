import "./App.css";
import { createBrowserRouter, Route, createRoutesFromElements, NavLink, Outlet, useParams } from "react-router-dom";
import Products, { loaderProducts } from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import axios from "axios";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<div className="root-layout">
			<div className="nav">
				<ul>
					<li>
						<NavLink to="/login">Login</NavLink>
					</li>
					<li>
						<NavLink to="signup">Signup</NavLink>
					</li>
					<li>
						<NavLink to="dashboard">Dashboard</NavLink>
					</li>
					<li>
						<NavLink to="products">Daftar Produk</NavLink>
					</li>
				</ul>
			</div>

			<main className="outlet">
				<Outlet />
			</main>
		</div>
	);
}

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Dashboard />} />
			<Route path="login" element={<Login />} />
			<Route path="signup" element={<SignUp />} />
			<Route path="dashboard" element={<Dashboard />} />
			<Route path="products" element={<Products />} loader={loaderProducts} />

			<Route
				path="products/:id"
				element={<SingleProduct />}
				loader={async ({ params }) => {
					const res = await axios.get(`http://localhost:3000/products/${params.id}`);
					return await res.data;
				}}
			/>
		</Route>
	)
);
export default App;
