import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavHeader.scss";

const NavHeader = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [headerOpacity, setHeaderOpacity] = useState(1);

	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);

		// Adjust the header opacity based on the scroll position
		if (position < 300) {
			setHeaderOpacity(1 - position / 300);
		} else {
			setHeaderOpacity(0);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header>
			<Navbar expand='lg' className='navbar'>
				<Navbar.Brand href='#'>Brand</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto'>
						<Nav.Link href='#home'>Home</Nav.Link>
						<Nav.Link href='#link'>Link</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<div className='header-content' style={{ opacity: headerOpacity }}>
				<h1>Welcome to our Site</h1>
				<p>Este es un párrafo de prueba</p>
				<h2>Soy un H2</h2>
				<h3>Un H3 por acá</h3>
				<h4>No se olviden de mi, soy un H4</h4>
			</div>
		</header>
	);
};

export default NavHeader;
