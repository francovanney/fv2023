import { useState } from "react";
import "./App.scss";
import Body from "./components/Body";
import Navbar from "./components/Navbar";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<Navbar/>
			<Body/>
		</div>
	);
}

export default App;
