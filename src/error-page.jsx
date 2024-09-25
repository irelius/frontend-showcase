import { useContext } from "react";
import { useRouteError } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";

export default function ErrorPage() {
	const error = useRouteError();
	const { theme } = useContext(ThemeContext);

	return (
		<div id="error-page" className="error-page-container dfc jcc aic">
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>Error: {error.statusText || error.message}</i>
			</p>
			<button
				className={`error-page-button dfr jcc border ${theme}-border pointer`}
				onClick={() => {
					history.back();
				}}
			>
				Go Back
			</button>
		</div>
	);
}
