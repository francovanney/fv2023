import { Nav } from "react-bootstrap";
import logo from "../../assets/Logos/Fv/logo_FVDark.svg";
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

	const [expandNavbar, setExpandNavbar] = useState(false);

	return (
		<nav
			className={scrolled ? "scrolled-down navbar" : "navbar"}
			id={expandNavbar ? "open" : "close"}>
			<div className='container-logo'>
				<img src={logo} width={35} id='FVLogo' />
			</div>
			<div className='links'>
				<div className='toggleButton'>
					<button
						onClick={() => {
							setExpandNavbar(
								(prev) => !prev
							);
						}}>
						{expandNavbar ? "X" : "O"}
					</button>
				</div>
				<Nav.Link href='#header-section'>Home</Nav.Link>
				<Nav.Link href='#hola-section'>¡Hola!</Nav.Link>
				<Nav.Link href='#skills-section'>
					Skills
				</Nav.Link>
			</div>
		</nav>
	);
};

export default Navbar;
