import { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import "./InteractiveComponents.css";

export default function InteractiveComponents() {
	const [currDemo, setCurrDemo] = useState();
	const [showSideBar, setShowSideBar] = useState(false);
	const options = ["List Builder 1", "List Builder 2", "Image Carousel", "Accordion"];

	return (
		<div className="dfc">
                  {/* Side bar section. Set to show when showSideBar is true */}
			<section>
				<SideBar
					options={options}
					showSideBar={showSideBar}
					setShowSideBar={setShowSideBar}
				/>
			</section>

                  {/* Header section. Contains the button to set showSideBar to true so show side bar */}
			<section className="header">
				<i class="fa-solid fa-bars fa-2xl pointer" onClick={() => setShowSideBar(true)}></i>
			</section>
		</div>
	);
}
