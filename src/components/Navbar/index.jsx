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
	return (
		<body>
			<nav
				className={scrolled ? "scrolled-down" : ""}
				id='nav'>
				<div className='container flex'>
					<img src={logo} width={35} />
					<div className='links'>
						<ul>
							<li>
								{isMobile ? (
									<Nav.Link>
										Hola
									</Nav.Link>
								) : (
									""
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
			</nav>
		</body>
	);
};

export default Navbar;
