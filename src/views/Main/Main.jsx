import "./Main.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

export default function Main() {
	const { theme } = useContext(ThemeContext);
	const navigate = useNavigate();

	return (
		<div className="main-page-container">
			<section
				onClick={() => navigate("/api-integration")}
				className={`main-page-columns pointer ${theme}-theme temp`}
			>
				API Integration
			</section>
			<section
				onClick={() => navigate("/interactive-components")}
				className={`main-page-columns pointer ${theme}-theme wtf`}
			>
				Interactive Components
			</section>
			<section
				onClick={() => navigate("/content-display")}
				className={`main-page-columns pointer ${theme}-theme`}
			>
				Content Display
			</section>
		</div>
	);
}
