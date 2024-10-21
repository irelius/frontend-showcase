import { createContext, useState } from "react";
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";

import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Footer, Main, Modal, Test } from "./views";
import ErrorPage from "./error-page";
import InteractiveComponents from "./views/InteractiveComponents/InteractiveComponents";
import ApiIntegration from "./views/ApiIntegration/ApiIntegration";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/modal",
		element: <Modal />,
	},
	{
		path: "/interactive-components",
		element: <InteractiveComponents />,
	},
	{
		path: "/api-integration",
		element: <ApiIntegration />,
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
				<Footer />
				<RouterProvider router={router} />
			</ThemeProvider>
		</>
	);
}

export default App;
