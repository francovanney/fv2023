import { Container } from "react-bootstrap";
import {
	VerticalTimeline,
	VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BiCodeAlt } from "react-icons/bi";
import { IoSchool } from "react-icons/io5";
import { FaGlobeEurope } from "react-icons/fa";

function Experience() {
	return (
		<section className='page-section' id='experience-section'>
			<Container className='container mt-4'>
				<h1 className='mb-4'>Experiencia</h1>
				<div className='experience'>
					<VerticalTimeline lineColor='#4E148C'>
						<VerticalTimelineElement
							className='vertical-timeline-element--education'
							date='2022'
							iconStyle={{
								background: "#17bed2",
								color: "#fff"
							}}
							icon={<BiCodeAlt />}>
							<h3 className='vertical-timeline-element-title'>
								Incluit
							</h3>

							<h4 className='vertical-timeline-element-subtitle pt-2'>
								Front-End
							</h4>
							<p className='text-description'>
								Parte del equipo
								del proyecto de
								UCMS (Texas),
								para crear un
								Sistema Uniforme
								de Manejo de
								Casos. Este
								proyecto masivo
								involucra a más
								de 11 equipos,
								incluyendo
								analistas,
								backends,
								frontends,
								control de
								calidad y jefes
								de proyecto.
								Como
								desarrollador,
								asumo la
								responsabilidad
								de estimar,
								planificar y
								contribuir a la
								definición e
								implementación
								de diferentes
								historias de
								usuario que
								contribuyan al
								desarrollo
								global del
								proyecto. Entre
								mis logros en
								este proyecto,
								puedo mencionar
								que diseñé
								componentes
								globales,
								realicé
								correcciones de
								errores y
								desarrollé
								integración de
								seguridad en la
								aplicación,
								además de dar
								soporte a otros
								equipos. También
								he creado
								solicitudes de
								incorporación de
								cambios y
								revisado el
								código de otros
								desarrolladores
								para garantizar
								que cumpla con
								los estándares
								de calidad del
								proyecto. Estoy
								orgulloso de ser
								parte de este
								proyecto y de
								contribuir al
								éxito de la
								iniciativa UCMS
								en Texas.
							</p>
							<p className='text-description'>
								Tecnologias:
								React,
								Bootstrap, HTML,
								CSS, Scrum,
								Jira,
								Confluence,
								Lucidchart
							</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className='vertical-timeline-element--education'
							date='2021 - 2022'
							iconStyle={{
								background: "#17bed2",
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
								Como miembro del
								equipo de
								front-end de
								varios proyectos
								en 3Metas,
								participé en el
								diseño y
								desarrollo de
								sitios y
								aplicaciones.
								Trabajé en la
								determinación de
								la estructura y
								el diseño de las
								páginas web,
								garantizando que
								la experiencia
								del usuario
								fuera la mejor
								posible. Además,
								creé código
								reutilizable
								para futuros
								proyectos y
								aseguré que la
								marca mantuviera
								su consistencia
								a lo largo del
								diseño. También
								participé en
								campañas de
								email marketing
								y publicidad. En
								resumen, como
								parte del equipo
								de front-end de
								3Metas, mi
								trabajo se
								centró en crear
								diseños
								funcionales,
								eficaces y
								atractivos para
								los clientes.
							</p>
							<p className='text-description'>
								Tecnologias:
								Angular, React,
								Bootstrap, HTML,
								CSS
							</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className='vertical-timeline-element--education'
							date='2010 - 2014'
							iconStyle={{
								background: "#17bed2",
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
								Agencia de
								software
								freelance que se
								dedica al
								desarrollo de
								apps, landing
								pages, sitios
								web y email
								marketing.
								Trabajo en esta
								start up en mis
								ratos libres y
								mi principal
								tarea es
								desarrollar
								aplicaciones y
								sitios webs.
								Para lograrlo,
								me enfoco en
								brindar
								soluciones
								personalizadas
								basadas en los
								requerimientos
								de cada cliente
								y en el diseño
								de la interfaz
								de usuario (UI)
								y la experiencia
								de usuario (UX).
								Además, me
								aseguro de
								llevar el diseño
								a la realidad
								del código y de
								que todo
								funcione de
								manera eficiente
								y satisfactoria
								para el usuario
								final. En
								resumen, mi
								trabajo en la
								agencia de
								software
								freelance se
								centra en
								ofrecer
								soluciones
								eficaces, desde
								la concepción
								hasta la
								implementación.
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
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className='vertical-timeline-element--education'
							date='2011 - 2013'
							iconStyle={{
								background: "#17bed2",
								color: "#fff"
							}}
							icon={<IoSchool />}>
							<h3 className='vertical-timeline-element-title'>
								UNNOBA Junín
							</h3>

							<h4 className='vertical-timeline-element-subtitle pt-2'>
								Ingenieria en
								sistemas
							</h4>
						</VerticalTimelineElement>
					</VerticalTimeline>
				</div>
			</Container>
		</section>
	);
}

export default Experience;
