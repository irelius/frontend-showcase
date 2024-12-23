import { useContext, useEffect, useState } from "react";
import "./InteractiveComponents.css";
import ListBuilder1 from "./ListBuilder1";
import ListBuilder2 from "./ListBuilder2";
import ImageCarousel from "./ImageCarousel";
import Accordion from "../Accordion/Accordion";
import SideBar from "../../components/SideBar/SideBar";
import { LoadingAnimation } from "../../components";
import { ThemeContext } from "../../context/ThemeContext";
import Header from "../../components/Header/Header";

export default function InteractiveComponents() {
	const [load, setLoad] = useState(false);
	const [loadTransition, setLoadTransition] = useState(false);
	const options = ["List Builder 1", "List Builder 2", "Image Carousel", "Accordion"];
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
			{/* <section className={`header ${theme}-theme`}>
				<i className="fa-solid fa-bars fa-2xl pointer" onClick={() => setShowSideBar(true)}></i>
			</section> */}

            <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />

			{/* Main section of interactive components */}
			<div className="ic-container">
				{currDemo === "list builder 1" ? (
					<ListBuilder1 />
				) : currDemo === "list builder 2" ? (
					<ListBuilder2 />
				) : currDemo === "image carousel" ? (
					<ImageCarousel />
				) : currDemo === "accordion" ? (
					<Accordion />
				) : (
					<div></div>
				)}
			</div>
		</div>
	) : (
		<LoadingAnimation />
	);
}
