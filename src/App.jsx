import { createContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Footer, Main, Test } from "./views";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/test",
		element: <Test />,
	},
]);

function App() {
	return (
		<>
			<ThemeProvider>
				<section className="footer-container">
					<Footer />
				</section>
				<RouterProvider router={router} />
			</ThemeProvider>
		</>
	);
}

export default App;
