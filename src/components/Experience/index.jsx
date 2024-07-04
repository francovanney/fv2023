import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Modal, Tab, TabList, TabPanel, TabPanels, Tabs } from "@carbon/react";
import {
	VerticalTimeline,
	VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BiCodeAlt } from "react-icons/bi";
import { IoSchool } from "react-icons/io5";
import { FaGlobeEurope } from "react-icons/fa";
import { Button } from "@carbon/react";
import { motion } from "framer-motion";
import { ArrowRight } from "@carbon/icons-react";
import Agencia2222 from "../../assets/Proyects/2222page.jpg";
import DaleArg from "../../assets/Proyects/daleArg.jpg";
import TRT from "../../assets/Proyects/TRT.jpg";
import LanguageContext from "../../Context/LanguageContext";
import { ThemeContext } from "../../Context/ThemeContext";

function Experience() {
	const [showModal, setShowModal] = useState(false);
	const [open, setOpen] = useState(false);
	const handleShowModal = () => setShowModal(true);
	const { texts, language } = useContext(LanguageContext);
	const { isDarkTheme } = useContext(ThemeContext);

	const contentStyle = {
		background: isDarkTheme ? "#1E2125" : "#f8f9fa",
		color: isDarkTheme ? "#fff" : "#111" // Cambia este valor si es necesario
	};

	return (
		<section
			className={isDarkTheme ? "page-section bg-dark" : "page-section bg-light"}
			id='experience-section'>
			<Container className='container mt-4'>
				<h1 className={isDarkTheme ? "mb-4 text-light" : "mb-4"}>
					{texts.navbarExperience}
				</h1>
				<div className='experience'>
					<VerticalTimeline lineColor={isDarkTheme ? "#f8f9fa" : "#212529"}>
						<VerticalTimelineElement
							className='vertical-timeline-element--education'
							date='2022 - Today'
							contentStyle={contentStyle}
							iconStyle={{
								background: "var(--FirstColor)",
								color: "#fff"
							}}
							icon={<BiCodeAlt />}>
							<h3 className='vertical-timeline-element-title'>Avenga</h3>
							{/* <h5 className='vertical-timeline-element-'>Powered by Avenga</h5> */}
							<h6 className='mt-1'>
								{language === "es"
									? "Avenga es una empresa de software que opera en USA, América Latina y Europa"
									: "Avenga is a software company running operations across the US, Latin America & Europe."}
							</h6>

							<h4 className='vertical-timeline-element-subtitle pt-2'>
								Accenture
							</h4>
							<p className='text-description'>
								{language === "es"
									? "Desarrollo de un sistema interno vital para Accenture, involucrando a 750,000 usuarios con foco en la mejora de la experiencia del usuario y la accesibilidad, abordando necesidades de personas no visibles o auditivas. Resolución de problemas (bugs) e implementación de nuevas funcionalidades mediante Vue.js, contribuyendo al avance continuo del sistema."
									: "Development of a critical internal system for Accenture, involving 750,000 users with a focus on improving user experience and accessibility, addressing the needs of non-visible or auditory individuals. Troubleshooting (bugs) and implementation of new functionalities using Vue.js, contributing to the ongoing advancement of the system."}
							</p>
							<p className='text-description'>
								VueJs, Bootstrap, HTML, CSS, Screen Reader
							</p>

							<h4 className='vertical-timeline-element-subtitle pt-4'>
								iDocket
							</h4>
							<p className='text-description'>
								{language === "es"
									? "UCMS (Texas), Sistema Uniforme de Manejo de Casos. Este proyecto masivo involucró a más de 11 equipos, incluyendo analistas, backend, frontend, control de calidad y jefes de proyecto. Como desarrollador, asumí la responsabilidad de estimar, planificar y contribuir a la definición e implementación de diferentes historias de usuario que contribuyeron al desarrollo global del proyecto. En este proyecto, diseñé componentes globales, solucioné errores y desarrollé la integración de seguridad en la aplicación. Además, brindé soporte a otros equipos, creé solicitudes de cambios y revisé el código de otros desarrolladores para asegurarme de que cumpliera con los estándares de calidad del proyecto."
									: "UCMS (Texas) project, where we created a Unified Case Management System. This massive project involved more than 11 teams, including analysts, backends, frontends, quality control, and project managers. As a developer, I took on the responsibility of estimating, planning, and contributing to the definition and implementation of various user stories that contribute to the overall project development. In this project, I designed global components, addressed bug fixes, and implemented security integration in the application. I also provided support to other teams, created change requests, and reviewed code from other developers to ensure it met the project's quality standards."}
							</p>
							<p className='text-description'>
								React, Bootstrap, HTML, CSS, Scrum, Jira, Confluence, Lucidchart
							</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className='vertical-timeline-element--education'
							date='2021 - 2022'
							contentStyle={contentStyle}
							iconStyle={{
								background: "var(--FirstColor)",
								color: "#fff"
							}}
							icon={<BiCodeAlt />}>
							<h3 className='vertical-timeline-element-title'>3 Metas Corp</h3>

							<h4 className='vertical-timeline-element-subtitle pt-2'>
								Front-End
							</h4>
							<p className='text-description'>
								{language === "es"
									? "Como miembro del equipo de front-end de varios proyectos en 3Metas, participé en el diseño y desarrollo de sitios y aplicaciones. Trabajé en la determinación de la estructura y el diseño de las páginas web, garantizando que la experiencia del usuario fuera la mejor posible. Además, creé código reutilizable para futuros proyectos y aseguré que la marca mantuviera su consistencia a lo largo del diseño. También participé en campañas de email marketing y publicidad. En resumen, como parte del equipo de front-end de 3Metas, mi trabajo se centró en crear diseños funcionales, eficaces y atractivos para los clientes."
									: "As a member of the front-end team of various projects at 3Metas, I was involved in the design and development of sites and applications. I worked on determining the structure and design of the web pages, ensuring that the user experience was the best possible. Additionally, I created reusable code for future projects and ensured that the branding remained consistent throughout the design. I also participated in email marketing and advertising campaigns. In summary, as part of the 3Metas front-end team, my work focused on creating functional, effective and attractive designs for clients."}
							</p>
							<p className='text-description'>
								Angular, React, Bootstrap, HTML, CSS
							</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className='vertical-timeline-element--education'
							date='2020'
							contentStyle={contentStyle}
							iconStyle={{
								background: "var(--FirstColor)",
								color: "#fff"
							}}
							icon={<BiCodeAlt />}>
							<h3 className='vertical-timeline-element-title'>PampaCode</h3>

							<h4 className='vertical-timeline-element-subtitle pt-2'>
								Front-End
							</h4>
							<p className='text-description'>
								{language === "es"
									? "Agencia de software freelance que se dedica al desarrollo de apps, landing pages, sitios web y email marketing. Trabajo en esta start up en mis ratos libres y mi principal tarea es desarrollar aplicaciones y sitios webs. Para lograrlo, me enfoco en brindar soluciones personalizadas basadas en los requerimientos de cada cliente y en el diseño de la interfaz de usuario (UI) y la experiencia de usuario (UX). Además, me aseguro de llevar el diseño a la realidad del código y de que todo funcione de manera eficiente y satisfactoria para el usuario final. En resumen, mi trabajo en la agencia de software freelance se centra en ofrecer soluciones eficaces, desde la concepción hasta la implementación."
									: "Freelance software agency dedicated to the development of apps, landing pages, websites and email marketing. I work in this start up in my free time and my main task is to develop applications and websites. To achieve this, I focus on providing customized solutions based on the requirements of each client and on the design of the user interface (UI) and user experience (UX). Also, I make sure that I bring the design to the reality of the code and that everything works efficiently and satisfactorily for the end user. In short, my work at the freelance software agency is focused on delivering effective solutions, from conception to implementation."}
							</p>
							<p className='text-description'>
								<a
									className='py-2'
									target={"_blank"}
									href={"https://www.pampacode.com/"}>
									www.pampacode.com
								</a>
								<ArrowRight className='mx-2' />
							</p>
							<div>
								<Button
									onClick={() => setOpen(true)}
									className='mt-2 button-custom'>
									{language === "es" ? "Ver Proyectos" : "View Projects"}
								</Button>
							</div>
							<p className='text-description'>
								{/* 								<motion.button
									className='my-4'
									id='button-custom'
									whileHover={{
										scale: 1.025
									}}
									whileTap={{
										scale: 0.9
									}}
									onClick={() => setOpen(true)}
									role='button'>
									{language === "es" ? "Ver Proyectos" : "View Projects"}
								</motion.button> */}
							</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className='vertical-timeline-element--education'
							date='2011 - 2013'
							contentStyle={contentStyle}
							iconStyle={{
								background: "var(--FirstColor)",
								color: "#fff"
							}}
							icon={<IoSchool />}>
							<h3 className='vertical-timeline-element-title'>UNNOBA Junín</h3>

							<h4 className='vertical-timeline-element-subtitle pt-2'>
								{texts.college}
							</h4>
						</VerticalTimelineElement>
					</VerticalTimeline>
				</div>
				<Modal
					isFullWidth
					size='lg'
					passiveModal
					open={open}
					onRequestClose={() => setOpen(false)}>
					<h1 className='px-3'>
						{language === "es" ? "Proyectos" : "Projects"}
					</h1>
					<Tabs>
						<TabList className='px-3 tab-list' data-modal-primary-focus>
							<Tab>Dale Arg</Tab>
							<Tab>Vivere Vene</Tab>
							<Tab>TRT Producciones</Tab>
							<Tab>22:22 Agencia</Tab>
						</TabList>
						<TabPanels>
							{/* DAleArg */}
							<TabPanel className='px-0 mb-5'>
								<Container>
									<div className='d-flex flex-column flex-md-row align-items-start justify-content-between'>
										<div className='text-md-start mb-3 mb-md-0'>
											<img
												src={DaleArg}
												width={250}
												className='mb-2 preview-img'
											/>
											<a
												href='https://daleargentinafest.com/'
												target='_blank'
												className='d-block'>
												www.daleargentinafest.com
												<ArrowRight className='ms-2' />
											</a>
										</div>
										<div className='text-md-start ms-md-3'>
											<p className='mx-0 mx-md-2 project-description'>
												{language === "es"
													? "Dale Argentina Fest es el primer festival de bandas argentinas en España, celebrándose en 5 ciudades españolas durante el mes de junio. Este festival apuesta por un concepto innovador que combina gastronomía, sostenibilidad, emprendimiento local, actividades para todas las edades y música."
													: "Dale Argentina Fest is the first festival of Argentine bands in Spain, taking place in 5 Spanish cities during the month of June. This festival embraces an innovative concept that combines gastronomy, sustainability, local entrepreneurship, activities for all ages, and music."}
											</p>
											<p className='mx-0 mx-md-2 project-description'>
												{language === "es"
													? "El diseño del sitio web se centró en proporcionar una experiencia de usuario sobresaliente a través de bocetos y prototipos para mejorar la estructura del sitio, los flujos de navegación y la disposición visual. Se prestó especial atención a la usabilidad, la navegación intuitiva y la presentación clara de la información, garantizando que el diseño se adapte automáticamente a diferentes tamaños de pantalla para ofrecer una experiencia óptima tanto en dispositivos móviles como en escritorios. Adicionalmente, se implementaron formularios de contacto y acreditaciones de prensa, notificando al cliente sobre nuevos mensajes y almacenando la información en una base de datos para una gestión eficiente según los filtros del cuestionario."
													: "The website design focused on providing an outstanding user experience through sketches and prototypes to enhance the site's structure, navigation flows, and visual layout. Special attention was paid to usability, intuitive navigation, and clear presentation of information, ensuring that the design adapts automatically to different screen sizes for an optimal experience on both mobile and desktop devices. Additionally, contact forms and press accreditations were implemented, notifying the client of new messages and storing information in a database for efficient management according to questionnaire filters."}
											</p>

											<h6 className='mx-0 mx-md-2 '>Stack</h6>
											<p className='mx-0 mx-md-2 project-description'>
												HTML, CSS, React, Bootstrap
											</p>
										</div>
									</div>
								</Container>
							</TabPanel>
							{/* Vivere */}
							<TabPanel className='px-0 mb-5'>
								<Container>
									<div className='d-flex flex-column flex-md-row align-items-start justify-content-between'>
										<div className='text-md-start mb-3 mb-md-0'>
											<img
												src={
													"https://pampacode.com/assets/VivereDemo-50b12604.jpg"
												}
												width={250}
												className='mb-2 preview-img'
											/>
											<a
												href='https://menu.viverebene.com.ar/'
												target='_blank'
												className='d-block'>
												www.menu.viverebene.com.ar
												<ArrowRight className='ms-2' />
											</a>
										</div>
										<div className='text-md-start ms-md-3'>
											<p className='mx-0 mx-md-2 project-description'>
												{language === "es"
													? "Vivere Bene es una yogurtería con orígenes italianos que ofrece una experiencia culinaria excepcional en sus locales. El sitio web combina funcionalidades avanzadas con un diseño elegante y atractivo, manteniendo la comunicación visual propia de la marca."
													: "Vivere Bene is a yogurt shop with Italian origins that offers an exceptional culinary experience in its stores. The website combines advanced functionalities with an elegant and attractive design, maintaining the brand's visual communication."}
											</p>
											<p className='mx-0 mx-md-2 project-description'>
												{language === "es"
													? "El diseño atractivo y funcional del sitio web y el menú digital de Vivere Bene se basa en nuestro objetivo principal de proporcionar a los usuarios una experiencia fluida y agradable al explorar los diversos productos de la yogurtería artesanal italiana. Se utilizaron tarjetas de categorías que permiten una navegación intuitiva hacia subcategorías y, finalmente, hacia el producto específico que el cliente desea seleccionar. Cada etapa del proceso está cuidadosamente diseñada para mostrar todos los detalles relevantes y facilitar la elección del cliente. Implementamos una solución innovadora que permite a los usuarios acceder al menú digital de manera rápida y sencilla mediante códigos QR distribuidos en los locales."
													: "The attractive and functional design of Vivere Bene's website and digital menu is based on our main objective of providing users with a smooth and pleasant experience while exploring the various products of the artisanal Italian yogurt shop. We used category cards that allow intuitive navigation to subcategories and, finally, to the specific product that the customer wants to select. Each stage of the process is carefully designed to show all relevant details and facilitate the customer's choice. We implemented an innovative solution that allows users to quickly and easily access the digital menu through QR codes distributed in the stores."}
											</p>

											<h6 className='mx-0 mx-md-2 '>Stack</h6>
											<p className='mx-0 mx-md-2 project-description'>
												HTML, CSS, React, Bootstrap
											</p>
										</div>
									</div>
								</Container>
							</TabPanel>
							{/* TRT */}
							<TabPanel className='px-0 mb-5'>
								<Container>
									<div className='d-flex flex-column flex-md-row align-items-start justify-content-between'>
										<div className='text-md-start mb-3 mb-md-0'>
											<img src={TRT} width={250} className='mb-2 preview-img' />
											<a
												href='http://trtproducciones.com/'
												target='_blank'
												className='d-block'>
												www.trtproducciones.com
												<ArrowRight className='ms-2' />
											</a>
										</div>
										<div className='text-md-start ms-md-3'>
											<p className='mx-0 mx-md-2 project-description'>
												{language === "es"
													? "TRT Producciones es una agencia de eventos con sede en Málaga, especializada en la producción de giras y festivales en las principales ciudades de España. Ofrecen servicios de planificación de eventos de alto nivel para artistas y audiencias en Barcelona, Madrid, Valencia, Mallorca, Alicante y Málaga."
													: "TRT Producciones is an event agency based in Málaga, specializing in the production of tours and festivals in major cities across Spain. They offer high-level event planning services for artists and audiences in Barcelona, Madrid, Valencia, Mallorca, Alicante, and Málaga."}
											</p>
											<p className='mx-0 mx-md-2 project-description'>
												{language === "es"
													? "El diseño se centró en crear una experiencia de usuario excepcional mediante bocetos y prototipos para refinar la estructura del sitio web, los flujos de navegación y la disposición visual. Se prestó especial atención a la usabilidad, la navegación intuitiva y la presentación efectiva de la información, asegurando que el diseño se adapte automáticamente a diferentes tamaños de pantalla para una experiencia óptima en dispositivos móviles y de escritorio. Además, se implementaron formularios de contacto y acreditaciones, notificando al cliente sobre nuevos mensajes y guardando la información en una base de datos según el show u otros filtros del cuestionario."
													: "The design focused on creating an exceptional user experience through sketches and prototypes to refine the website's structure, navigation flows, and visual layout. Special attention was paid to usability, intuitive navigation, and effective information presentation, ensuring the design automatically adapts to different screen sizes for an optimal experience on both mobile and desktop devices. Additionally, contact and accreditation forms were implemented, notifying the client of new messages and storing information in a database according to the show or other questionnaire filters."}
											</p>

											<h6 className='mx-0 mx-md-2 '>Stack</h6>
											<p className='mx-0 mx-md-2 project-description'>
												HTML, CSS, React, Bootstrap
											</p>
										</div>
									</div>
								</Container>
							</TabPanel>
							{/* 22 */}
							<TabPanel className='px-0 mb-5'>
								<Container>
									<div className='d-flex flex-column flex-md-row align-items-start justify-content-between'>
										<div className='text-md-start mb-3 mb-md-0'>
											<img
												src={Agencia2222}
												width={250}
												className='mb-2 preview-img'
											/>
											<a
												href='https://www.2222agencia.com/'
												target='_blank'
												className='d-block'>
												www.2222agencia.com
												<ArrowRight className='ms-2' />
											</a>
										</div>
										<div className='text-md-start ms-md-3'>
											<p className='mx-0 mx-md-2 project-description'>
												{language === "es"
													? "2222 Agencia está especializada en el booking, management y producción de giras, conciertos y eventos en España. Desde Pampa Code aportamos al proyecto soluciones informáticas, creando un sitio web responsive que facilita la comunicación con los usuarios en la venta de entradas y promueve la exposición de los artistas de la agencia."
													: "2222 Agencia specializes in booking, management, and production of tours, concerts, and events in Spain. From Pampa Code, we contributed to the project with IT solutions, creating a responsive website that facilitates communication with users for ticket sales and promotes the exposure of the agency's artists."}
											</p>
											<p className='mx-0 mx-md-2 project-description'>
												{language === "es"
													? "El diseño del sitio web se centró en proporcionar una experiencia amigable para los usuarios, permitiéndoles navegar fácilmente por los servicios ofrecidos. El principal foco está en la usabilidad, la navegación intuitiva y la presentación clara y efectiva de la información. Además, se desarrolló una plataforma en línea para la venta de entradas, permitiendo a los usuarios explorar eventos, ver detalles como fechas, horarios y ubicaciones, y realizar la compra de boletos de manera conveniente y segura. La página web asegura una experiencia óptima en dispositivos móviles y de escritorio, adaptándose automáticamente a diferentes tamaños de pantalla."
													: "The website design focused on providing a user-friendly experience, allowing them to easily navigate the services offered. The main focus is on usability, intuitive navigation, and clear and effective information presentation. Additionally, an online ticket sales platform was developed, allowing users to explore events, view details such as dates, times, and locations, and purchase tickets conveniently and securely. The website ensures an optimal experience on mobile and desktop devices, automatically adapting to different screen sizes."}
											</p>

											<h6 className='mx-0 mx-md-2 '>Stack</h6>
											<p className='mx-0 mx-md-2 project-description'>
												HTML, CSS, React, Bootstrap
											</p>
										</div>
									</div>
								</Container>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Modal>
				{/* 				<Modal
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
				</Modal> */}
			</Container>
		</section>
	);
}

export default Experience;
