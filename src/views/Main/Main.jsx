import "./Main.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

export default function Main() {
	const { theme } = useContext(ThemeContext);
	const navigate = useNavigate();

	return (
		<div className="dfr main-page-container">
			<section
				onClick={() => navigate("/api-integration")}
				className={`dfr jcc aic main-page-columns ${theme}-theme`}
			>
				API Integration
			</section>
			<section
				onClick={() => navigate("/interactive-components")}
				className={`dfr jcc aic main-page-columns ${theme}-theme`}
			>
				Interactive Components
			</section>
			<section
				onClick={() => navigate("/content-display")}
				className={`dfr jcc aic main-page-columns ${theme}-theme`}
			>
				Content Display
			</section>
		</div>
	);
}
