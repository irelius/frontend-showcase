import "./Main.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Main() {
	const { theme } = useContext(ThemeContext);

	return (
		<div className="dfr main-page-container">
			<section className={`dfr jcc aic main-page-columns ${theme}-theme`}>
				API Integration
			</section>
			<section className={`dfr jcc aic main-page-columns ${theme}-theme`}>
				Interactive Components
			</section>
			<section className={`dfr jcc aic main-page-columns ${theme}-theme`}>
				Content Display
			</section>
		</div>
	);
}
