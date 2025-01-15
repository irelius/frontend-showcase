import "./ApiIntegration.css";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LoadingAnimation } from "../../components";
import SideBar from "../../components/SideBar/SideBar";
import Weather from "./Weather/Weather";
import Header from "../../components/Header/Header";
import MapsApi from "./MapsApi/MapsApi";

export default function ApiIntegration() {
	const [load, setLoad] = useState(false);
	const [loadTransition, setLoadTransition] = useState(false);
	const options = ["Map", "Weather", "Stocks"];
	const [currDemo, setCurrDemo] = useState("weather");
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

			<Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />

			{/* Main section of interactive components */}
			<div className="ai-container">
				{currDemo === "map" ? (
					<MapsApi />
				) : currDemo === "weather" ? (
					<Weather />
				) : currDemo === "stocks" ? (
					<>Stocks API WIP.</>
				) : (
					<div></div>
				)}
			</div>
		</div>
	) : (
		<LoadingAnimation />
	);
}
