import { useEffect, useState } from "react";
import "./Accordion.css";
import { AccordionRow } from "../../components";

export default function Accordion({ setGoToTop }) {
	const [closeAll, setCloseAll] = useState(false);

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

	return (
		<div className="accordion-container">
			<div className="accordion-section">
				<section className="accordion-minimize-button margin-bottom-2">
					<button className="pointer" id="asdf" onClick={() => setCloseAll(true)}>
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
					window.scrollTo({ top: 0, smooth: true });
				}}
			>
				<i className="fa-solid fa-angle-up fa-3x"></i>
			</section>
		</div>
	);
}
