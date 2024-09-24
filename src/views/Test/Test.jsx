import "./Test.css";

import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Test() {
	const { theme, changeTheme } = useContext(ThemeContext);

	const test = {
		"--d": "black",
	};

	return (
		<div className="df c gap">
			<div className={`df r gap`}>
				<section className={`${theme} color-display`}>Color One</section>
				<section className={`${theme} color-display`}>Color Two</section>
				<section className={`${theme} color-display`}>Color Three</section>
				<section className={`${theme} color-display`}>Color Four</section>
			</div>
			<div className="df c gap">
				<button onClick={() => changeTheme("winter-theme")}>Winter</button>
				<button onClick={() => changeTheme("fall-theme")}>Fall</button>
				<button onClick={() => changeTheme("summer-theme")}>Summer</button>
				<button onClick={() => changeTheme("spring-theme")}>Spring</button>
			</div>
			<div className="test" style={test}>
				test
			</div>

			<div style={{ height: "150px" }} className="test-background dfr jcc aic">
				asdf
			</div>
		</div>
	);
}

export default Test;
