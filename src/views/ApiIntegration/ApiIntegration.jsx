import "./ApiIntegration.css";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LoadingAnimation } from "../../components";
import SideBar from "../../components/SideBar/SideBar";

export default function ApiIntegration() {
	const [load, setLoad] = useState(false);
	const [loadTransition, setLoadTransition] = useState(false);
	const options = ["Google Maps", "Weather", "Stocks"];
	const [currDemo, setCurrDemo] = useState("image carousel");
	const [showSideBar, setShowSideBar] = useState(false);

	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		setTimeout(() => {
			setLoad(true);
		}, 2000);
	}, []);

	useEffect(() => {
		if (load) {
			setTimeout(() => {
				setLoadTransition(true);
			}, 250);
		}
	}, [load]);

	// TODO: set animation transition between the different options

	return load ? (
		<div className={`load-transition-${loadTransition}`}>
			{/* Side bar section. Set to show when showSideBar is true */}
			<SideBar
				options={options}
				setCurrDemo={setCurrDemo}
				showSideBar={showSideBar}
				setShowSideBar={setShowSideBar}
			/>

			{/* Header section. Contains the button to set showSideBar to true so show side bar */}
			<section className={`header ${theme}-theme`}>
				<i className="fa-solid fa-bars fa-2xl pointer" onClick={() => setShowSideBar(true)}></i>
			</section>

			{/* Main section of interactive components */}
			<div className="ai-container">
				{currDemo === "google maps" ? (
					<>asdf maps</>
				) : currDemo === "weather" ? (
					<>asdf weather</>
				) : currDemo === "stocks" ? (
					<>asdf</>
				) : (
					<div></div>
				)}
			</div>
		</div>
	) : (
		<LoadingAnimation />
	);
}
