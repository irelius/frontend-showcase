import "./AccordionRow.css";

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

// data is an object of title and body keys
export default function AccordionRow({ data, closeAll, setCloseAll }) {
	const [showRow, setShowRow] = useState(false);
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		if (closeAll) {
			setShowRow(false);
		}
	}, [closeAll]);

	return (
		<div className="accordion-row-container dfc">
			<section
				onClick={() => {
					setShowRow((prev) => !prev);
					setCloseAll(false);
				}}
				className={`row-header ${theme}-theme button-shadow pointer`}
			>
				{data.title}
			</section>
			<section className={`row-container-${showRow}`}>
				<section className={`show-row-${showRow}`}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
					dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
					anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
					irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</section>
			</section>
		</div>
	);
}
