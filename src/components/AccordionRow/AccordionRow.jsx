import { useEffect, useState } from "react";
import "./AccordionRow.css";

// data is an object of title and body keys
export default function AccordionRow({ data, closeAll, setCloseAll }) {
	const [showRow, setShowRow] = useState(false);

	useEffect(() => {
		if (closeAll) {
			setShowRow(false);
		}
	}, [closeAll]);

	return (
		<div>
			<section
				onClick={() => {
					setShowRow((prev) => !prev);
					setCloseAll(false);
				}}
			>
				{data.title}
			</section>
			<section className={`row-container-${showRow}`}>
				<section className={`show-row-${showRow}`}>
					{data.body}
					lorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem
					dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem
					dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem
					dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem
					dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem
					dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem
					dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem
					dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem
					dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsumlorem dipsum
				</section>
			</section>
		</div>
	);
}
