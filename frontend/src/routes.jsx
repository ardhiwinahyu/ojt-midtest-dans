import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import Products, { loaderProducts } from "./pages/Products";
import App from "./App";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			{/* <Route index element={<Home />} />
			<Route path="login" element={<Login />} />
			<Route path="about" element={<About />} /> */}
			<Route path="products" element={<Products />} loader={loaderProducts} />
		</Route>
	)
);

export default router;

//errorElement={<ErrorPage />}
