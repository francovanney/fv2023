import { useEffect, useState } from "react";
import "./App.scss";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./Context/LanguageContext";

const App = () => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 5000);
	}, []);

	return (
		<div className='App'>
			{loading ? (
				<Loader />
			) : (
				<LanguageProvider>
					<Navbar />
					<Body />
					<Experience />
					<Contact />
					<Footer />
				</LanguageProvider>
			)}
		</div>
	);
};

export default App;
