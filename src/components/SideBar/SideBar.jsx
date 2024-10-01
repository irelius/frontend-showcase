import "./SideBar.css";

import { useNavigate } from "react-router-dom";
import ExitButton from "../ExitButton/ExitButton";
import { homeButtonStyling, optionsStyling } from "../../style-objects";

export default function SideBar({ options, setCurrDemo, showSideBar, setShowSideBar }) {
	const navigate = useNavigate();

	return (
		<div>
			<section
				onClick={() => setShowSideBar(false)}
				className={`modal-background-${showSideBar}`}
			></section>
			<section className={`dfc side-bar-${showSideBar}`}>
				<section className="side-bar-exit-button">
					<ExitButton setShowModal={setShowSideBar} />
				</section>
				<section className="dfc side-bar-options margin-left" style={optionsStyling}>
					{options.map((el, i) => {
						return <section key={i}>{el}</section>;
					})}
				</section>
				<section className="dfc aic">
					<button
						className="pointer margin-top padding-left padding-right home-button"
						style={homeButtonStyling}
						onClick={() => navigate("/")}
					>
						Go Back Home
					</button>
				</section>
			</section>
		</div>
	);
}
