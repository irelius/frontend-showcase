import "./Footer.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Footer() {
	const { theme, changeTheme } = useContext(ThemeContext);

	return (
		<div className={`dfr footer-container ${theme}-a2-fill ${theme}-a1-color`}>
			{/* <section onClick={() => navigate("www.google.com")}>Samuel Bae</section> */}
			<section className="footer-links">
				<a target="_blank" href="https://samuelbae.netlify.app" className="pointer">
					Samuel Bae
				</a>
				<a target="_blank" href="https://www.linkedin.com/in/sbkihongbae/" className="pointer">
					<i className="fa-brands fa-linkedin fa-lg"></i>
				</a>
			</section>

			<select defaultValue={theme} className={`theme-container border pointer ${theme}-a1-border`}>
				<option value="summer" onClick={() => changeTheme("summer")}>
					Summer
				</option>
				<option value="spring" onClick={() => changeTheme("spring")}>
					Spring
				</option>
				<option value="fall" onClick={() => changeTheme("fall")}>
					Fall
				</option>
				<option value="winter" onClick={() => changeTheme("winter")}>
					Winter
				</option>
			</select>
		</div>
	);
}
