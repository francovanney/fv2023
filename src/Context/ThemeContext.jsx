import React, { createContext, useState, useEffect } from "react";
import { GlobalTheme } from "@carbon/react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
	const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
		? "g100"
		: "g10";
	const initialTheme = localStorage.getItem("theme") || systemTheme || "g10";

	const [theme, setTheme] = useState(initialTheme);
	const [isDarkTheme, setIsDarkTheme] = useState(initialTheme === "g100");

	const toggleTheme = () => {
		const newTheme = theme === "g10" ? "g100" : "g10";
		setTheme(newTheme);
		setIsDarkTheme(newTheme === "g100");
		localStorage.setItem("theme", newTheme);
	};

	useEffect(() => {
		document.documentElement.dataset.carbonTheme = theme;
	}, [theme]);

	useEffect(() => {
		const handleSystemThemeChange = (event) => {
			const newTheme = event.matches ? "g100" : "g10";
			setTheme(newTheme);
			setIsDarkTheme(newTheme === "g100");
			localStorage.setItem("theme", newTheme);
		};

		const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
		systemThemeQuery.addEventListener("change", handleSystemThemeChange);

		return () => {
			systemThemeQuery.removeEventListener("change", handleSystemThemeChange);
		};
	}, []);

	const themeContextData = {
		theme,
		isDarkTheme,
		toggleTheme
	};

	return (
		<GlobalTheme theme={theme}>
			<ThemeContext.Provider value={themeContextData}>
				{children}
			</ThemeContext.Provider>
		</GlobalTheme>
	);
};

export default ThemeContextProvider;
