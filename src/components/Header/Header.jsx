import "./Header.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Header({ showSideBar, setShowSideBar }) {
	const { theme } = useContext(ThemeContext);

	console.log("booba", theme);

	return (
		<div>
			<section className={`header ${theme}-theme`}>
				<i className="fa-solid fa-bars fa-2xl pointer" onClick={() => setShowSideBar(true)}></i>
			</section>
		</div>
	);
}
