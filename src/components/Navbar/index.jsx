import logoDark from "../../assets/Logos/Fv/logo_FVDark.svg";
import logoLight from "../../assets/Logos/Fv/logo_FVLight.svg";
import { useState, useEffect, useContext } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import LanguageContext from "../../Context/LanguageContext";
import { MediaQueries } from "../Utils/mediaqueries";
import Hamburger from "hamburger-react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { ThemeContext } from "../../Context/ThemeContext";

const NavigationBar = () => {
	const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
	const [scrolled, setScrolled] = useState(false);
	const [expandNavbar, setExpandNavbar] = useState(undefined);
	const [active, setActive] = useState("");
	const { texts } = useContext(LanguageContext);
	const { isTabletOrMobile } = MediaQueries();

	// SCROLL TO SECTION //

	const [section, setSection] = useState(null);

	useEffect(() => {
		const sectionElement = document.querySelector(`#${section}`);
		if (sectionElement) {
			sectionElement.scrollIntoView({ behavior: "smooth" });
		}
	}, [section]);

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

	// NEW NAVBAR CODE //

	const [expanded, setExpanded] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const handleToggle = () => setExpanded(!expanded);

	const handleLinkClick = () => {
		if (isMobile && expanded) setExpanded(false);
	};

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		handleResize();
		window.addEventListener("resize", handleResize);

		document.addEventListener("click", handleOutsideClick);

		return () => {
			window.removeEventListener("resize", handleResize);
			document.removeEventListener(
				"click",
				handleOutsideClick
			);
		};
	}, [expanded]);

	const handleOutsideClick = (event) => {
		if (isMobile && expanded && !event.target.closest("#navbar")) {
			setExpanded(false);
		}
	};

	const handleColorChange = (color) => {
		document.documentElement.style.setProperty(
			"--FirstColor",
			color
		);
	};

	return (
		<Navbar
			id='navbar'
			bg={isDarkTheme ? "dark" : "light"}
			expand='lg'
			className={
				isMobile && expanded
					? "mobile-menu-open"
					: "fixed-top"
			}>
			{isMobile ? (
				<Container className='d-flex justify-content-between align-items-center'>
					<img
						src={
							isDarkTheme
								? logoLight
								: logoDark
						}
						width={35}
						id='FVLogo'
						className={`ml-2 ${
							isMobile
								? "mr-auto"
								: ""
						}`}
					/>
					<label
						className={`switch-container ${
							isMobile
								? "mx-auto"
								: "ml-2"
						}`}>
						<input
							type='checkbox'
							checked={isDarkTheme}
							onChange={toggleTheme}
						/>
						<span className='slider'></span>
					</label>
					{isMobile && (
						<div className='hamburger-wrapper'>
							<Hamburger
								color={
									isDarkTheme
										? "white"
										: "black"
								}
								size={20}
								toggled={
									expanded
								}
								toggle={
									handleToggle
								}
							/>
						</div>
					)}
				</Container>
			) : (
				<Container className='d-flex justify-content-end align-items-center'>
					<img
						src={
							isDarkTheme
								? logoLight
								: logoDark
						}
						width={35}
						id='FVLogo'
						className='ml-2'
						role='image'
						tabIndex={0}
					/>
					{/* <div className='color-picker'>
						<button
							className='color-button red'
							onClick={() =>
								handleColorChange(
									"#FF0000"
								)
							}>
							Rojo
						</button>
						<button
							className='color-button green'
							onClick={() =>
								handleColorChange(
									"#00FF00"
								)
							}>
							Verde
						</button>
						<button
							className='color-button blue'
							onClick={() =>
								handleColorChange(
									"#0000FF"
								)
							}>
							Azul
						</button>
					</div> */}

					<label
						className={
							isMobile
								? "switch-container"
								: "ml-2 switch-container"
						}>
						<input
							type='checkbox'
							checked={isDarkTheme}
							onChange={toggleTheme}
						/>
						<span className='slider'></span>
					</label>
					<Navbar.Collapse
						id='basic-navbar-nav'
						className='justify-content-end'>
						<Nav
							className={
								isDarkTheme
									? "bg-dark text-light ml-auto"
									: "bg-light ml-auto"
							}>
							<Nav.Item
								onClick={() => {
									handleLinkClick();
									setSection(
										"header-section"
									);
								}}
								className={`links-desktop${
									active ===
									"header-section"
										? " active"
										: ""
								} ${
									isDarkTheme
										? "links-desktop-dark"
										: "links-desktop-light"
								}`}
								role='button'
								tabIndex={0}>
								{
									texts.navbarHome
								}
							</Nav.Item>
							<Nav.Item
								onClick={() => {
									handleLinkClick();
									setSection(
										"hola-section"
									);
								}}
								className={`links-desktop${
									active ===
									"hola-section"
										? " active"
										: ""
								}`}
								role='button'
								tabIndex={0}>
								{
									texts.navbarHola
								}
							</Nav.Item>
							<Nav.Item
								onClick={() => {
									handleLinkClick();
									setSection(
										"skills-section"
									);
								}}
								className={`links-desktop${
									active ===
									"skills-section"
										? " active"
										: ""
								}`}
								role='button'
								tabIndex={0}>
								{
									texts.navbarSkills
								}
							</Nav.Item>
							<Nav.Item
								onClick={() => {
									handleLinkClick();
									setSection(
										"experience-section"
									);
								}}
								className={`links-desktop${
									active ===
									"experience-section"
										? " active"
										: ""
								}`}
								role='button'
								tabIndex={0}>
								{
									texts.navbarExperience
								}
							</Nav.Item>
							<Nav.Item
								onClick={() => {
									handleLinkClick();
									setSection(
										"contact-section"
									);
								}}
								className={`links-desktop${
									active ===
									"contact-section"
										? " active"
										: ""
								}`}
								role='button'
								tabIndex={0}>
								{
									texts.navbarContact
								}
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Container>
			)}
			<motion.div
				className='progress-bar'
				style={{ scaleX }}
			/>
			{isMobile && (
				<Navbar.Collapse
					id='basic-navbar-nav'
					className={expanded ? "show" : ""}>
					<Nav className='mr-auto'>
						<Nav.Item
							onClick={() => {
								handleLinkClick();
								setSection(
									"header-section"
								);
							}}
							className={`links-mobile mt-2${
								active ===
								"header-section"
									? " active"
									: ""
							}`}>
							{texts.navbarHome}
						</Nav.Item>
						<Nav.Item
							onClick={() => {
								handleLinkClick();
								setSection(
									"hola-section"
								);
							}}
							className={`links-mobile mt-2${
								active ===
								"hola-section"
									? " active"
									: ""
							}`}>
							{texts.navbarHola}
						</Nav.Item>
						<Nav.Item
							onClick={() => {
								handleLinkClick();
								setSection(
									"skills-section"
								);
							}}
							className={`links-mobile mt-2${
								active ===
								"skills-section"
									? " active"
									: ""
							}`}>
							{texts.navbarSkills}
						</Nav.Item>
						<Nav.Item
							onClick={() => {
								handleLinkClick();
								setSection(
									"experience-section"
								);
							}}
							className={`links-mobile mt-2${
								active ===
								"experience-section"
									? " active"
									: ""
							}`}>
							{texts.navbarExperience}
						</Nav.Item>
						<Nav.Item
							onClick={() => {
								handleLinkClick();
								setSection(
									"contact-section"
								);
							}}
							className={`links-mobile mt-2${
								active ===
								"contact-section"
									? " active"
									: ""
							}`}>
							{texts.navbarContact}
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			)}
		</Navbar>
	);
};

export default NavigationBar;
