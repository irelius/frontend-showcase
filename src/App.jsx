import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { Main, Test } from "./views";
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
	return <RouterProvider router={router} />;
}

export default App;
