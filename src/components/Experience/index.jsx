import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Modal, Button, Row, Col } from "react-bootstrap";
import {
	VerticalTimeline,
	VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BiCodeAlt } from "react-icons/bi";
import { IoSchool } from "react-icons/io5";
import { FaGlobeEurope } from "react-icons/fa";
import { motion } from "framer-motion";
import Agencia2222 from "../../assets/Proyects/2222page.jpg";
import DaleArg from "../../assets/Proyects/daleArg.jpg";
import TRT from "../../assets/Proyects/TRT.jpg";
import LanguageContext from "../../Context/LanguageContext";
import { ThemeContext } from "../../Context/ThemeContext";

function Experience() {
	const [showModal, setShowModal] = useState(false);
	const handleShowModal = () => setShowModal(true);
	const { texts } = useContext(LanguageContext);
	const { isDarkTheme } = useContext(ThemeContext);

	const contentStyle = {
		background: isDarkTheme ? "#1E2125" : "#f8f9fa",
		color: isDarkTheme ? "#fff" : "#111" // Cambia este valor si es necesario
	};

	return (
		<section
			className={
				isDarkTheme
					? "page-section bg-dark"
					: "page-section bg-light"
			}
			id='experience-section'>
			<Container className='container mt-4'>
				<h1 className={isDarkTheme ? "mb-4 text-light" : "mb-4"}>
					{texts.navbarExperience}
				</h1>
				<div className='experience'>
					<VerticalTimeline
						lineColor={
							isDarkTheme
								? "#f8f9fa"
								: "#212529"
						}>
						<VerticalTimelineElement
							className='vertical-timeline-element--education'
							date='2022 - Today'
							contentStyle={
								contentStyle
							}
							iconStyle={{
								background: "var(--FirstColor)",
								color: "#fff"
							}}
							icon={<BiCodeAlt />}>
							<h3 className='vertical-timeline-element-title'>
								IncluIT
							</h3>
							<h5 className='vertical-timeline-element-'>
								Powered by
								Avenga
							</h5>
							<h6 className='mt-1'>
								{
									texts.aboutIncluit
								}
							</h6>

							<h4 className='vertical-timeline-element-subtitle pt-2'>
								Accenture
							</h4>
							<p className='text-description'>
								{texts.exp4}
							</p>
							<p className='text-description'>
								{texts.exp4Tech}
							</p>

							<h4 className='vertical-timeline-element-subtitle pt-2'>
								iDocket
							</h4>
							<p className='text-description'>
								{texts.exp1}
							</p>
							<p className='text-description'>
								{texts.exp1Tech}
							</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className='vertical-timeline-element--education'
							date='2021 - 2022'
							contentStyle={
								contentStyle
							}
							iconStyle={{
								background: "var(--FirstColor)",
								color: "#fff"
							}}
							icon={<BiCodeAlt />}>
							<h3 className='vertical-timeline-element-title'>
								3 Metas Corp
							</h3>

							<h4 className='vertical-timeline-element-subtitle pt-2'>
								Front-End
							</h4>
							<p className='text-description'>
								{texts.exp2}
							</p>
							<p className='text-description'>
								{texts.exp2Tech}
							</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className='vertical-timeline-element--education'
							date='2020'
							contentStyle={
								contentStyle
							}
							iconStyle={{
								background: "var(--FirstColor)",
								color: "#fff"
							}}
							icon={<BiCodeAlt />}>
							<h3 className='vertical-timeline-element-title'>
								PampaCode
							</h3>

							<h4 className='vertical-timeline-element-subtitle pt-2'>
								Front-End
							</h4>
							<p className='text-description'>
								{texts.exp3}
							</p>
							<p className='text-description'>
								<FaGlobeEurope />
								<a
									className='p-2'
									target={
										"_blank"
									}
									href={
										"https://www.pampacode.com/"
									}>
									www.pampacode.com
								</a>
							</p>
							<p className='text-description'>
								<motion.button
									className='my-4'
									id='button-custom'
									whileHover={{
										scale: 1.025
									}}
									whileTap={{
										scale: 0.9
									}}
									onClick={
										handleShowModal
									}
									role='button'>
									{texts.projectsButton ===
									"es"
										? "VER PROYECTOS"
										: "VIEW PROJECTS"}
								</motion.button>
							</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className='vertical-timeline-element--education'
							date='2011 - 2013'
							contentStyle={
								contentStyle
							}
							iconStyle={{
								background: "var(--FirstColor)",
								color: "#fff"
							}}
							icon={<IoSchool />}>
							<h3 className='vertical-timeline-element-title'>
								UNNOBA Junín
							</h3>

							<h4 className='vertical-timeline-element-subtitle pt-2'>
								{texts.college}
							</h4>
						</VerticalTimelineElement>
					</VerticalTimeline>
				</div>
				<Modal
					centered
					size='md'
					show={showModal}
					onHide={() => setShowModal(false)}>
					<Modal.Header closeButton>
						<Modal.Title>
							{texts.projectTitle}
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Row>
							<Col xs={6} md={6}>
								<a
									href='http://trtproducciones.com/'
									target={
										"_blank"
									}>
									<img
										src={
											TRT
										}
										className='img-fluid'></img>
									<p className='text-center'>
										<a
											target={
												"_blank"
											}
											href='http://trtproducciones.com/'>
											TRTproducciones
										</a>
									</p>
								</a>
							</Col>
							<Col xs={6} md={6}>
								<a
									href='https://www.daleargentinafest.com/'
									target={
										"_blank"
									}>
									<img
										src={
											DaleArg
										}
										className='img-fluid'></img>
									<p className='text-center'>
										<a
											target={
												"_blank"
											}
											href='https://www.daleargentinafest.com/'>
											Dale
											Argentina
											Fest
										</a>
									</p>
								</a>
							</Col>
							<Col xs={6} md={6}>
								<a
									href='https://2222agencia.com/'
									target={
										"_blank"
									}>
									<img
										src={
											Agencia2222
										}
										className='img-fluid'></img>
									<p className='text-center'>
										<a
											target={
												"_blank"
											}
											href='https://2222agencia.com/'>
											2222
											Agencia
										</a>
									</p>
								</a>
							</Col>
						</Row>
					</Modal.Body>
				</Modal>
			</Container>
		</section>
	);
}

export default Experience;
