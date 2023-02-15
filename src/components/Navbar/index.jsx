import { Nav } from "react-bootstrap";
import logo from "../../assets/logo_fv-dark.png";
import { useState, useEffect } from "react";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);

	const onScroll = () => {
		const scrollPosition = window.pageYOffset;
		if (scrollPosition > 10) {
			if (!scrolled) {
				setScrolled(true);
			}
		} else {
			if (scrolled) {
				setScrolled(false);
			}
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, [scrolled]);
	return (
		<body>
			<nav
				className={scrolled ? "scrolled-down" : ""}
				id='nav'>
				<div className='container flex'>
					<img src={logo} />
					<div className='links'>
						<Nav.Link>Lorem1</Nav.Link>
						<Nav.Link>Lorem2</Nav.Link>
						<Nav.Link>Lorem3</Nav.Link>
						<Nav.Link>Lorem4</Nav.Link>
					</div>
				</div>
			</nav>
		</body>
	);
};

export default Navbar;
