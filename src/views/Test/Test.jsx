import "./Test.css";

import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Test() {
	const { theme, changeTheme } = useContext(ThemeContext);

	const asdf = {
		"--d": "black",
	};

	return (
		<div>
			{/* <DotLottieReact src="src/assets/lottie/test.lottie" loop autoplay /> */}
			<div className="official-test-2">
				<DotLottieReact src="src/assets/lottie/asdf.json" loop autoplay />
			</div>
		</div>
	);
}

export default Test;
