import "./Accordion.css";

import { useContext, useState } from "react";
import { AccordionRow } from "../../components";
import { ThemeContext } from "../../context/ThemeContext";

export default function Accordion() {
	const [closeAll, setCloseAll] = useState(false);
	const { theme } = useContext(ThemeContext);

	const exampleAccordion = [
		{
			title: "Accordion Row 1",
			body: "body for row 1",
		},
		{
			title: "Accordion Row 2",
			body: "body for row 2",
		},
		{
			title: "Accordion Row 3",
			body: "body for row 3",
		},
	];

	const style = {
		"--border": `0.1em solid var(--${theme}-a1)`,
		"--bc": `var(--${theme}-a1)`,
	};

	return (
		<div className="accordion-container">
			<div className="accordion-section">
				<section className="minimize-container margin-bottom-1">
					<button
						className={`pointer ${theme}-theme minimize-button button-shadow`}
						onClick={() => setCloseAll(true)}
					>
						Minimize
					</button>
				</section>
				<section className="accordion-rows">
					{exampleAccordion.map((el, i) => {
						return (
							<div key={i}>
								<AccordionRow data={el} closeAll={closeAll} setCloseAll={setCloseAll} />
							</div>
						);
					})}
				</section>
			</div>

			<section
				className="go-to-top pointer"
				onClick={() => {
					window.scrollTo({
						top: 0,
						behavior: "smooth",
					});
				}}
			>
				<i
					className={`fa-solid fa-circle-chevron-up fa-3x ${theme}-a2-color go-to-top-button`}
					style={style}
				></i>
			</section>
		</div>
	);
}
