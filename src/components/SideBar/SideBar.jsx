import "./SideBar.css";

import { useNavigate } from "react-router-dom";
import ExitButton from "../ExitButton/ExitButton";
import { useEffect } from "react";

export default function SideBar({ options, setCurrDemo, showSideBar, setShowSideBar }) {
	const navigate = useNavigate();

	return (
		<div>
			{/* Section for modal background */}
			<section
				className={`modal-background-${showSideBar}`}
				onClick={() => {
					setShowSideBar(false);
				}}
			></section>

			{/* section for side bar */}
			<section className={`dfc side-bar-${showSideBar}`} onClick={(e) => e.stopPropagation()}>
				{/* exit button */}
				<section className="side-bar-exit-button">
					<ExitButton setShowModal={setShowSideBar} />
				</section>

				{/* options for side bar */}
				<section className="dfc side-bar-options margin-left-3 margin-top-2">
					{options.map((el, i) => {
						return (
							<section
								className="side-bar-option pointer"
								key={i}
								onClick={() => {
									setCurrDemo(el.toLowerCase());
                                    setShowSideBar(false)
								}}
							>
								{el}
							</section>
						);
					})}
				</section>

				{/* home button */}
				<section className="dfc aic">
					<button
						className="pointer margin-top padding-left-1 padding-right-1 home-button"
						onClick={() => navigate("/")}
					>
						Home
					</button>
				</section>
			</section>
		</div>
	);
}
