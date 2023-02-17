import { useEffect, useState } from "react";
import "./App.scss";
import Body from "./components/Body";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

const App = () => {
	const [loading, setLoading] = useState(false);

/* 	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 5000);
	}, []); */

	return (
		<div className='App'>
			{loading ? (
				<Loader />
			) : (
				<>
					<Navbar />
					<Body />
				</>
			)}
		</div>
	);
};

export default App;
