import { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import "./InteractiveComponents.css";

export default function InteractiveComponents() {
	const [currDemo, setCurrDemo] = useState();
	const [showSideBar, setShowSideBar] = useState(false);
	const options = ["List Builder 1", "List Builder 2", "Image Carousel", "Accordion"];

	return (
		<div className="dfr">
			<section>
				<SideBar
					options={options}
					showSideBar={showSideBar}
					setShowSideBar={setShowSideBar}
				/>
			</section>

			<section className="dfc">
				<section>InteractiveComponents header</section>
				<button onClick={() => setShowSideBar((prev) => !prev)}>show side</button>
			</section>
		</div>
	);
}
