import { Nav } from "react-bootstrap";
import logo from "../../assets/Logos/Fv/logo_FVDark.svg";
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

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

	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	});

	return (
		<nav
			className={scrolled ? "scrolled-down navbar" : "navbar"}
			id={expandNavbar ? "open" : "close"}>
			<div className='container-logo'>
				<img src={logo} width={35} id='FVLogo' />
			</div>
			<motion.div
				className='progress-bar'
				style={{ scaleX }}
			/>
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
				<Nav.Link
					href='#header-section'
					onClick={() => {
						preventDefault();
						setExpandNavbar(close);
					}}>
					Home
				</Nav.Link>
				<Nav.Link
					href='#hola-section'
					onClick={() => setExpandNavbar(close)}>
					¡Hola!
				</Nav.Link>
				<Nav.Link
					href='#skills-section'
					onClick={() => setExpandNavbar(close)}>
					Skills
				</Nav.Link>
				<Nav.Link
					href='#experience-section'
					onClick={() => setExpandNavbar(close)}>
					Experiencia
				</Nav.Link>
				<Nav.Link
					href='#contact-section'
					onClick={() => setExpandNavbar(close)}>
					Contacto
				</Nav.Link>
			</div>
		</nav>
	);
};

export default Navbar;
