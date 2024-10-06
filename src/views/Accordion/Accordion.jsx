import { useEffect, useState } from "react";
import "./Accordion.css";
import { AccordionRow } from "../../components";

export default function Accordion() {
	const [showRow, setShowRow] = useState(false);
	const [closeAll, setCloseAll] = useState(false);

	const example = [
		{
			title: "1",
			body: "body for row 1",
		},
		{
			title: "2",
			body: "body for row 2",
		},
		{
			title: "3",
			body: "body for row 3",
		},
	];

	return (
		<div>
			{example.map((el, i) => {
				return (
					<div key={i}>
						<AccordionRow data={el} closeAll={closeAll} setCloseAll={setCloseAll} />
					</div>
				);
			})}
			<section>
				<button onClick={() => setCloseAll(true)}>Minimize</button>
			</section>
		</div>
	);
}
