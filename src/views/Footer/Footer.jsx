import "./Footer.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Footer() {
	const { theme, changeTheme } = useContext(ThemeContext);

      console.log('booba', theme)

	return (
		<div className={`dfr footer-container ${theme}-a2-fill ${theme}-a1-color`}>
			<section>Samuel Bae</section>
			<select className={`theme-container border ${theme}-a1-border`}>
                        <option selected={theme==="summer"} onClick={() => changeTheme("summer")}>Summer</option>
                        <option selected={theme==="spring"} onClick={() => changeTheme("spring")}>Spring</option>
                        <option selected={theme==="fall"} onClick={() => changeTheme("fall")}>Fall</option>
                        <option selected={theme==="winter"} onClick={() => changeTheme("winter")}>Winter</option>
                  </select>
		</div>
	);
}
