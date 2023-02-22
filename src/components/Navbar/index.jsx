import { Nav } from "react-bootstrap";
import logo from "../../assets/Logos/Fv/logo_FVDark.svg";
import { useState, useEffect, useContext } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import LanguageContext from "../../Context/LanguageContext";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [expandNavbar, setExpandNavbar] = useState(undefined);
	const [active, setActive] = useState("");
	const { texts } = useContext(LanguageContext);

	// SCROLL BAR //
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

	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	});

	// ACTIVE SECTION //

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll("section");
			sections.forEach((section) => {
				const rect = section.getBoundingClientRect();
				if (
					rect.top <= 200 &&
					rect.bottom > 200 &&
					rect.bottom <=
						(window.innerHeight ||
							document.documentElement
								.clientHeight)
				) {
					setActive(section.id);
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			//activeKey='/'
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
					className={
						active === "header-section"
							? "active"
							: ""
					}
					href='#header-section'
					onClick={() => {
						preventDefault();
						setExpandNavbar(close);
					}}>
					{texts.navbarHome}
				</Nav.Link>
				<Nav.Link
					className={
						active === "hola-section"
							? "active"
							: ""
					}
					href='#hola-section'
					onClick={() => setExpandNavbar(close)}>
					{texts.navbarHola}
				</Nav.Link>
				<Nav.Link
					className={
						active === "skills-section"
							? "active"
							: ""
					}
					href='#skills-section'
					onClick={() => setExpandNavbar(close)}>
					{texts.navbarSkills}
				</Nav.Link>
				<Nav.Link
					className={
						active === "experience-section"
							? "active"
							: ""
					}
					href='#experience-section'
					onClick={() => setExpandNavbar(close)}>
					{texts.navbarExperience}
				</Nav.Link>
				<Nav.Link
					className={
						active === "contact-section"
							? "active"
							: ""
					}
					href='#contact-section'
					onClick={() => setExpandNavbar(close)}>
					{texts.navbarContact}
				</Nav.Link>
			</div>
		</nav>
	);
};

export default Navbar;
