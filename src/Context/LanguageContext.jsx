import { createContext, useState } from "react";
import translations from "./translations";

const browserLanguage = window.navigator.language;
export const languageParsed = browserLanguage.substring(0, 2);

const LanguageContext = createContext();
const initialLanguage = languageParsed;

const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(initialLanguage);
	const [texts, setTexts] = useState(translations[language]);

	const handleLanguage = (e) => {
		const Switch = e.name;
		if (Switch === "ESP") {
			setLanguage("es");
			setTexts(translations.es);
		} else {
			setLanguage("ENG");
			setTexts(translations.en);
		}
	};

	const data = { texts, handleLanguage, language };
	return (
		<LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
	);
};

export { LanguageProvider };
export default LanguageContext;
