import { useEffect, useState } from "react";
import "./ImageCarousel.css";

export default function ImageCarousel() {
	const images = [1, 2, 3, 4, 5];
	const credits = {
		1: "Lisett Kruusimäe",
		2: "Lywin",
		3: "Bonnie",
		4: "Michael Hamments",
		5: "Yasemin Gunes",
	};

	const [galleryLight, setGalleryLight] = useState(true);

	const handleLightSwitch = () => {
		setGalleryLight((prev) => !prev);
	};

	// useEffect(() => {
	//     setTimeout(() => {
	//         console.log('booba')
	// 		setLeftZ((prev) => !prev);
	// 		setRightZ((prev) => !prev);
	// 	}, 500);
	// }, [moonZ]);

	return (
		<div className="carousel-container">
			<div className="carousel-button-left pointer">
				<i className="fa-solid fa-circle-arrow-left fa-2xl"></i>
			</div>
			<div className="carousel-images-container">
				{images.map((el, i) => {
					return (
						<img
							key={i}
							className="carousel-image"
							src={`src/assets/img/carousel/${el}.jpg`}
							alt={`Image by ${credits.el}`}
						/>
					);
				})}
			</div>
			<div className="carousel-button-right pointer">
				<i className="fa-solid fa-circle-arrow-right fa-2xl"></i>
			</div>
			<div className="gallery-light-container pointer" onClick={() => handleLightSwitch()}>
				<aside className={`gallery-switch-container-left`}>
					<i className={`fa-solid fa-sun fa-lg sun-${galleryLight}`} />
				</aside>
				<aside className={`gallery-switch-container-right`}>
					<i className={`fa-solid fa-moon fa-lg moon-${!galleryLight} `} />
				</aside>
                <section className={`light-circle-${galleryLight}`}></section>
			</div>
		</div>
	);
}
