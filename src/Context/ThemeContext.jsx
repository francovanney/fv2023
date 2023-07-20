import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
	const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
		.matches
		? "dark"
		: "light"; // Lee el tema configurado en el sistema operativo o navegador
	const initialTheme =
		localStorage.getItem("theme") || systemTheme || "light"; // Prioriza el tema guardado en el almacenamiento local, luego el tema del sistema, y usa "light" como valor predeterminado si no se encuentra ninguno

	const [theme, setTheme] = useState(initialTheme);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme); // Guarda el tema en el almacenamiento local para que persista al recargar la página
	};

	useEffect(() => {
		document.body.setAttribute("data-theme", theme); // Aplica el tema seleccionado a la etiqueta <body> para que los estilos CSS puedan adaptarse
	}, [theme]);

	const themeContextData = {
		theme,
		toggleTheme
	};

	return (
		<ThemeContext.Provider value={themeContextData}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
