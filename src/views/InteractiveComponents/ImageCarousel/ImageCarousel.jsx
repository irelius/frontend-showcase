import { useContext, useEffect, useState } from "react";
import "./ImageCarousel.css";
import { ThemeContext } from "../../../context/ThemeContext";

export default function ImageCarousel() {
	const { theme } = useContext(ThemeContext);

	const images = [1, 2, 3, 4, 5];
	const credits = {
		1: "Lisett Kruusimäe",
		2: "Lywin",
		3: "Bonnie",
		4: "Michael Hamments",
		5: "Yasemin Gunes",
	};

	const [galleryLight, setGalleryLight] = useState(false);
	const [currentImage, setCurrentImage] = useState(0);
	const [hover, setHover] = useState(false);

	const handleLightSwitch = () => {
		setGalleryLight((prev) => !prev);
	};

	const switchImage = (direction) => {
		if (direction === "left" && currentImage > 0) {
			setCurrentImage((prev) => prev - 1);
		}
		if (direction === "right" && currentImage < images.length - 1) {
			setCurrentImage((prev) => prev + 1);
		}
	};

	return (
		<div className="carousel-container">
			{/* gallery lighting effect */}
			<div className={`carousel-light-${!galleryLight}`}></div>

			{/* Background shading for gallery light effect  */}
			<div className={`carousel-background-${!galleryLight}`}></div>

			{/* switch for gallery light */}
			<div
				className={`gallery-switch-container pointer switch-${!galleryLight} ${theme}-theme`}
				onClick={() => handleLightSwitch()}
			>
				<aside className={`gallery-switch-container-left`}>
					<i className={`fa-solid fa-sun fa-lg sun-${!galleryLight}`} />
				</aside>
				<aside className={`gallery-switch-container-right`}>
					<i className={`fa-regular fa-moon fa-lg moon-${galleryLight} `}></i>
				</aside>
				<section className={`light-circle-${!galleryLight}`}></section>
			</div>

			{/* left button */}
			{currentImage > 0 ? (
				<i
					className="fa-solid fa-circle-arrow-left fa-2xl carousel-button-left pointer"
					onClick={() => switchImage("left")}
				></i>
			) : (
				<></>
			)}

			{/* main carousel images container */}
			<div
				className={`carousel-images-container`}
				style={{ left: `calc(50% - 7.5em - ${20 * currentImage}em)` }}
			>
				{images.map((el, i) => {
					return (
						<div className="carousel-image-container pointer">
							<div className={`photographer-${i === currentImage}`}>By {credits[el]}</div>
							<img
								onMouseOver={() => setHover(true)}
								onMouseOut={() => setHover(false)}
								onClick={() => setCurrentImage(i)}
								key={i}
								className={`carousel-image image-focus-${
									i === currentImage
								} shadow-${galleryLight}`}
								src={`src/assets/img/carousel/${el}.jpg`}
								alt={`Image by ${credits[el]}`}
							/>
						</div>
					);
				})}
			</div>

			{/* right button */}
			{currentImage < images.length - 1 ? (
				<i
					className="fa-solid fa-circle-arrow-right fa-2xl carousel-button-right pointer"
					onClick={() => switchImage("right")}
				></i>
			) : (
				<></>
			)}

			<section
				className="carousel-quick-container"
				style={{ left: `calc(50% - ${currentImage}em)` }}
			>
				{images.map((el, i) => {
					return (
						<div
							className={`test-${i === currentImage} pointer`}
							onClick={() => setCurrentImage(i)}
						>
							<i className="fa-regular fa-circle fa-2xs"></i>
						</div>
					);
				})}
			</section>
		</div>
	);
}
