import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "winter");

	const changeTheme = (theme) => {
		localStorage.setItem("theme", theme);
		setTheme(theme);
	};

	return (
		<div>
			<ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>
		</div>
	);
};
