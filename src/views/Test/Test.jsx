import "./Test.css";

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";

function Test() {
	const { theme, changeTheme } = useContext(ThemeContext);

	const asdf = {
		"--d": "black",
	};

	const [load, setLoad] = useState(false);
	const [test, setTest] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoad(true);
		}, 2000);
	}, []);

	useEffect(() => {
		if (load) {
			setTimeout(() => {
				setTest(true);
			}, 250);
		}
	}, [load]);

	return load ? (
		<div className={`test-${test}`}>
			test
			<div className="official-test-2"></div>
		</div>
	) : (
		<LoadingAnimation />
	);
}

export default Test;
