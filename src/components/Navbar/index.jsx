import { Nav } from "react-bootstrap";
import logo from "../../assets/Logos/Fv/logo_FVDark.svg";
import { useState, useEffect } from "react";
import { useMediaQueries } from "../../utils/mediaQueries";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const { isDesktop, isMobile } = useMediaQueries();

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
		/* 		<nav
			className={scrolled ? "scrolled-down nav" : "nav"}
			id={expandNavbar ? "open" : "close"}>
			<div className='container-nav'>
				<img src={logo} width={35} />
				<button
					className='toggleButton'
					onClick={() => {
						setExpandNavbar(
							(prev) => !prev
						);
					}}>
					|||
				</button>
				<div className='links'>
					<ul>
						<li>
							{isMobile ? (
								<Nav.Link>
									Hola
								</Nav.Link>
							) : (
								<Nav.Link>
									Hola 2
								</Nav.Link>
							)}
						</li>
						<li>
							{isMobile ? (
								<Nav.Link>
									Skills
								</Nav.Link>
							) : (
								""
							)}
						</li>
						<li>
							{isMobile ? (
								<Nav.Link>
									Work
								</Nav.Link>
							) : (
								""
							)}
						</li>
						<li>
							{isMobile ? (
								<Nav.Link>
									Contacto
								</Nav.Link>
							) : (
								""
							)}
						</li>
					</ul>
				</div>
			</div>
		</nav> */
		<div className='navbar' id={expandNavbar ? "open" : "close"}>
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
				<Nav.Link to='/'> Home </Nav.Link>
				<Nav.Link to='/projects'> Projects </Nav.Link>
				<Nav.Link to='/experience'>
					{" "}
					Experience{" "}
				</Nav.Link>
			</div>
		</div>
	);
};

export default Navbar;
