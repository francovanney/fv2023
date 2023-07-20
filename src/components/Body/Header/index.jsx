import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import { useContext } from "react";
import LanguageContext from "../../../Context/LanguageContext";
import { Parallax, Background } from "react-parallax";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaBehance } from "react-icons/fa";
import avatar from "../../../assets/Img/Profile2.jpg";
import Select from "react-select";
import ReactCountryFlag from "react-country-flag";
import { languageParsed } from "../../../Context/LanguageContext";
import { useMediaQuery } from "react-responsive";

const labelEn = (
	<ReactCountryFlag
		countryCode='US'
		className='emojiFlag'
		svg
		style={{
			fontSize: "2em",
			lineHeight: "2em"
		}}
	/>
);

const labelEs = (
	<ReactCountryFlag
		countryCode='AR'
		className='emojiFlag'
		svg
		style={{
			fontSize: "2em",
			lineHeight: "2em"
		}}
	/>
);

const options = [
	{ value: "en", label: labelEn },
	{ value: "es", label: labelEs }
];

const Header = () => {
	const { texts, handleLanguage } = useContext(LanguageContext);
	const isXXL = useMediaQuery({ query: "(min-width: 1400px)" });
	const iconSize = isXXL ? "45px" : "30px";
	return (
		<Parallax strength={400}>
			<Background className='custom-bg'></Background>
			<section className='page-section' id='header-section'>
				<Container>
					<Row className='animate__animated animate__fadeInDown'>
						<Col md={8}>
							<h1 id='title'>
								FRANCO VANNEY
							</h1>
							<h6 id='subtitle'>
								{
									texts.description
								}
							</h6>
							<Row className='mt-3'>
								<Col md={12}>
									<a
										href='https://www.linkedin.com/in/franco-vanney-0b9273a1/'
										target={
											"_blank"
										}>
										<FaLinkedin
											className='mx-1 custom-icon'
											size={
												iconSize
											}
										/>
									</a>
									<a
										href='https://github.com/francovanney'
										target={
											"_blank"
										}>
										<FaGithub
											className='mx-2 custom-icon'
											size={
												iconSize
											}
										/>
									</a>
									<a
										href='https://www.behance.net/francovanney'
										target={
											"_blank"
										}>
										<FaBehance
											className='mx-2 custom-icon'
											size={
												iconSize
											}
										/>
									</a>
									<a
										href='https://www.instagram.com/francovanney/'
										target={
											"_blank"
										}>
										<FaInstagram
											className='mx-2 custom-icon'
											size={
												iconSize
											}
										/>
									</a>
								</Col>
							</Row>
							<Row>
								<Col
									id='col-select'
									xs={12}
									md={12}>
									<p>
										{
											texts.language
										}
									</p>
									<Select
										placeholder={
											languageParsed ===
											"es"
												? labelEs
												: labelEn
										}
										id={
											"select"
										}
										options={
											options
										}
										onChange={
											handleLanguage
										}
									/>
								</Col>
							</Row>
						</Col>
						<Col md={4}>
							<motion.img
								whileHover={{
									scale: 1
								}}
								initial={{
									scale: 0.9
								}}
								transition={{
									type: "spring",
									duration: 2
								}}
								id='img-pattern'
								src={avatar}
								className='banner'
							/>
						</Col>
						<Col md={1}></Col>
					</Row>
				</Container>
			</section>
		</Parallax>
	);
};

export default Header;
