import "./Test.css";

import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Test() {
	const { theme, changeTheme } = useContext(ThemeContext);

	const asdf = {
		"--d": "black",
	};

	return (
		<div className="df c gap">
			<div className="test" style={asdf}>
				test
			</div>

			<div style={{ height: "150px" }} className="test-background dfr jcc aic">
				asdf
			</div>
		</div>
	);
}

export default Test;
