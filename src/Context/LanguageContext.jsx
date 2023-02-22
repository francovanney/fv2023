import { createContext, useState } from "react";
import translations from "./translations";

const LanguageContext = createContext();
const initialLanguage = "en";

const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(initialLanguage);
	const [texts, setTexts] = useState(translations[language]);

	const handleLanguage = (e) => {
		//console.log(e.target.value);
		const Switch = e.value;
		if (Switch === "es") {
			setLanguage("es");
			setTexts(translations.es);
		} else {
			setLanguage("en");
			setTexts(translations.en);
		}
	};

	const data = { texts, handleLanguage };
	return (
		<LanguageContext.Provider value={data}>
			{children}
		</LanguageContext.Provider>
	);
};

export { LanguageProvider };
export default LanguageContext;
