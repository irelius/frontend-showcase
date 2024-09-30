import "./SideBar.css";

import { useNavigate } from "react-router-dom";
import ExitButton from "../ExitButton/ExitButton";

export default function SideBar({ options, setCurrDemo, showSideBar, setShowSideBar }) {
	const navigate = useNavigate();

	return (
		<div>
			<section
				onClick={() => setShowSideBar((prev) => !prev)}
				className={`modal-background-${showSideBar}`}
			></section>
			<section className={`dfc side-bar-${showSideBar}`}>
				<section>
					<ExitButton setShowModal={setShowSideBar} />
				</section>
				<section className="dfc side-bar-options">
					{options.map((el) => {
						return <section>{el}</section>;
					})}
				</section>
				<section onClick={() => navigate("/")}>Go Back Home</section>
			</section>
		</div>
	);
}
