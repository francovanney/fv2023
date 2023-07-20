import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
	const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
		.matches
		? "dark"
		: "light";
	const initialTheme =
		localStorage.getItem("theme") || systemTheme || "light";

	const [theme, setTheme] = useState(initialTheme);
	const [isDarkTheme, setIsDarkTheme] = useState(initialTheme === "dark");

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		setIsDarkTheme(newTheme === "dark");
		localStorage.setItem("theme", newTheme);
	};

	useEffect(() => {
		document.body.setAttribute("data-theme", theme);
	}, [theme]);

	useEffect(() => {
		const handleSystemThemeChange = (event) => {
			const newTheme = event.matches ? "dark" : "light";
			setTheme(newTheme);
			setIsDarkTheme(newTheme === "dark");
			localStorage.setItem("theme", newTheme);
		};

		const systemThemeQuery = window.matchMedia(
			"(prefers-color-scheme: dark)"
		);
		systemThemeQuery.addEventListener(
			"change",
			handleSystemThemeChange
		);

		return () => {
			systemThemeQuery.removeEventListener(
				"change",
				handleSystemThemeChange
			);
		};
	}, []);

	const themeContextData = {
		theme,
		isDarkTheme,
		toggleTheme
	};

	return (
		<ThemeContext.Provider value={themeContextData}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
