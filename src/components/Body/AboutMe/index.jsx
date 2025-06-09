import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LanguageContext from "../../../Context/LanguageContext";
import { useContext } from "react";
import {
	Download,
	Promote,
	CenterSquare,
	UserRole,
	Trophy,
	GameConsole,
	DocumentDownload
} from "@carbon/icons-react";
import { ThemeContext } from "../../../Context/ThemeContext";
import { AccordionItem, Button, Accordion } from "@carbon/react";

const pathVariants = {
	hidden: {
		opacity: 0,
		pathLength: 0
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		transition: {
			duration: 1,
			ease: "easeInOut",
			repeat: Infinity
		}
	}
};

const AboutMe = () => {
	const { isDarkTheme } = useContext(ThemeContext);
	const { texts, language } = useContext(LanguageContext);
	const aboutMeDescription = texts.aboutMeDescription;
	const paragraphs = aboutMeDescription.split("\n\n");

	const handleButtonClick = () => {
		language === "es"
			? window.open(
					"https://drive.google.com/file/d/1eSDkdu-cjzLbsjYpOzABzdfpDbFccwNl/view?usp=sharing",
					"_blank"
				)
			: window.open(
					"https://drive.google.com/file/d/1PIX7LIpAC0F7jaJEX3RGToh7l1JelP2I/view?usp=sharing",
					"_blank"
				);
	};
	return (
		<section
			className={isDarkTheme ? "page-section bg-dark" : "page-section bg-light"}
			id='hola-section'>
			<Container className='pb-4'>
				<Row>
					<Col xs={12} sm={12} md={4} xxl={4}>
						<h1 className='text-left'>
							<motion.svg
								version='1.1'
								id='Layer_1'
								xmlns='http://www.w3.org/2000/svg'
								xmlns:xlink='http://www.w3.org/1999/xlink'
								x='0px'
								y='0px'
								width='15%'
								viewBox='0 0 980 556'
								enable-background='new 0 0 980 556'
								xml:space='preserve'>
								<motion.path
									whileHover={{
										y: [0, 45, 0, 45, 0]
									}}
									transition={{
										type: "spring",
										duration: 2
									}}
									variants={pathVariants}
									fill='var(--FirstColor)'
									opacity='1.000000'
									stroke='none'
									d='
								M0.999998,231.468658 
									C3.041728,230.100555 5.179591,229.370926 7.111398,228.277313 
									C102.995811,173.995193 198.861938,119.680733 294.737152,65.382339 
									C296.280243,64.508408 297.911194,63.789509 300.999969,62.252342 
									C300.999969,73.803482 300.992737,84.252663 301.001404,94.701828 
									C301.021881,119.363678 300.956757,144.026382 301.181061,168.686417 
									C301.212646,172.161102 299.890991,173.555435 297.062805,174.967621 
									C230.459473,208.224167 163.900604,241.569717 97.335457,274.902710 
									C95.862953,275.640076 94.412437,276.421387 92.475563,277.430176 
									C111.002663,287.071472 129.069870,296.475769 147.139160,305.876068 
									C197.094666,331.864777 247.049011,357.855682 297.013824,383.826508 
									C299.227570,384.977173 301.192871,385.735229 301.163483,389.101685 
									C300.877014,421.926056 300.816895,454.752350 300.657104,487.577972 
									C300.645874,489.890747 300.355133,492.202118 300.110168,495.724915 
									C200.221466,438.906525 100.968086,382.449493 1.357354,325.996246 
									C1.000000,294.645782 1.000000,263.291534 0.999998,231.468658 
								z'
								/>
							</motion.svg>
						</h1>
					</Col>
					<Col xs={12} sm={12} md={8} xxl={8}>
						<h2 className={isDarkTheme ? "text-light mb-2 mx-3" : "mb-2 mx-3"}>
							{texts.navbarHola}
							<motion.div
								style={{
									display: "inline-block"
								}}
								whileHover={{
									rotate: [0, 45, 0, 45, 0]
								}}
								transition={{
									type: "spring",
									duration: 2
								}}>
								<span className='hi-icon'>👋</span>
							</motion.div>
						</h2>
						<div className={isDarkTheme ? "text-light mb-2" : "mb-2"}>
							{language === "es" ? (
								<p className='mx-3 text-description'>
									Mi nombre es Franco Vanney, soy desarrollador front-end y
									diseñador multidisciplinario. Actualmente resido en la ciudad
									de Junín, Buenos Aires, Argentina. Me considero un jugador de
									equipo, curioso, creativo y detallista, apasionado por el
									proceso creativo.
								</p>
							) : (
								<p className='mx-3 text-description'>
									My name is Franco Vanney, and I'm a front-end developer and
									multidisciplinary designer. Currently, I reside in Junín,
									Buenos Aires, Argentina. I consider myself a team player,
									curious, creative, and detail-oriented, passionate about the
									creative process.
								</p>
							)}
							<Accordion>
								<AccordionItem
									className='acc-item'
									title={
										language === "es" ? (
											<>
												<Promote /> Perspectiva
											</>
										) : (
											<>
												<Promote /> Perspective
											</>
										)
									}>
									{language === "es" ? (
										<p className='mx-3'>
											Creo en el poder de la colaboración y la comunicación
											efectiva como en el trabajo en equipo, valorando distintas
											perspectivas para crear interfaces de usuario funcionales.
											Escuchar activamente y resolver problemas en conjunto es
											clave para lograr soluciones innovadoras y centradas en el
											usuario.
										</p>
									) : (
										<p className='mx-3'>
											I believe in the power of collaboration and effective
											communication in teamwork, valuing different perspectives
											to create functional user interfaces. Actively listening
											and solving problems together is key to achieving
											innovative, user-centered solutions.
										</p>
									)}
								</AccordionItem>
								<AccordionItem
									className='acc-item'
									title={
										language === "es" ? (
											<>
												<CenterSquare /> Foco
											</>
										) : (
											<>
												<CenterSquare /> Focus
											</>
										)
									}>
									{language === "es" ? (
										<p className='mx-3'>
											La importancia del usuario es mi foco principal como
											desarrollador de UI. Cada etapa, desde la necesidad, el
											diseño y posteriormente su desarrollo, asegura productos
											que satisfacen necesidades, transmiten valores y generan
											experiencias positivas.
										</p>
									) : (
										<p className='mx-3'>
											The importance of the user is my primary focus as a UI
											developer. Each stage, from understanding needs, design,
											and subsequent development, ensures products that meet
											needs, convey values, and generate positive experiences.
										</p>
									)}
								</AccordionItem>
								<AccordionItem
									className='acc-item'
									title={
										language === "es" ? (
											<>
												<UserRole /> Rol
											</>
										) : (
											<>
												<UserRole /> Role
											</>
										)
									}>
									{language === "es" ? (
										<p className='mx-3'>
											Como desarrollador Front-End, mi rol incluye escribir
											código en diversos lenguajes, idear, planificar y crear
											elementos visuales atractivos. Valoro la comunicación
											abierta y efectiva para garantizar que cada componente
											funcione de manera óptima y se alinee con las expectativas
											del usuario, incluso teniendo en cuenta a usuarios con
											discapacidades y haciendo así uso de herramientas de
											accesibilidad web.
										</p>
									) : (
										<p className='mx-3'>
											As a Front-End developer, my role includes writing code in
											various languages, designing, planning, and creating
											visually appealing elements. I value open and effective
											communication to ensure that each component functions
											optimally and aligns with user expectations, including
											considering users with disabilities and utilizing web
											accessibility tools.
										</p>
									)}
								</AccordionItem>
								<AccordionItem
									className='acc-item'
									title={
										language === "es" ? (
											<>
												<Trophy /> Metas
											</>
										) : (
											<>
												<Trophy /> Goals
											</>
										)
									}>
									{language === "es" ? (
										<p className='mx-3'>
											Mi objetivo es aprender algo nuevo cada día, ampliando mis
											conocimientos y habilidades. Estoy comprometido con el
											crecimiento continuo tanto a nivel personal como
											profesional, y busco constantemente mejorar mis
											capacidades para ofrecer productos de alta calidad y
											experiencias de usuario excepcionales.
										</p>
									) : (
										<p className='mx-3'>
											My goal is to learn something new every day, expanding my
											knowledge and skills. I am committed to continuous growth
											both personally and professionally, constantly seeking to
											enhance my abilities to deliver high-quality products and
											exceptional user experiences.
										</p>
									)}
								</AccordionItem>
								<AccordionItem
									className='acc-item'
									title={
										language === "es" ? (
											<>
												<GameConsole /> Hobbies
											</>
										) : (
											<>
												<GameConsole /> Hobbies
											</>
										)
									}>
									{language === "es" ? (
										<p className='mx-3'>
											Disfruto andar en bicicleta, explorando nuevos paisajes y
											sintiendo la libertad que ofrece cada pedaleo. Además,
											toco la guitarra para conectar con la música y la
											creatividad. También me apasiona diseñar contenidos en
											vivo para eventos sociales y trabajar como iluminador de
											shows, creando experiencias visuales únicas que realzan la
											atmósfera de cada evento.
										</p>
									) : (
										<p className='mx-3'>
											I enjoy cycling, exploring new landscapes and feeling the
											freedom that each pedal brings. Additionally, I play the
											guitar to connect with music and creativity. I'm also
											passionate about designing live content for social events
											and working as a show lighting designer, creating unique
											visual experiences that enhance the atmosphere of each
											event.
										</p>
									)}
								</AccordionItem>
								<AccordionItem
									className='acc-item'
									title={
										language === "es" ? (
											<>
												<DocumentDownload /> Cv
											</>
										) : (
											<>
												<DocumentDownload /> Cv
											</>
										)
									}>
									<Container>
										<Button
											onClick={handleButtonClick}
											aria-label='download'
											tooltipPosition='right'
											hasIconOnly
											iconDescription='Download'>
											<Download size={18} />
										</Button>
									</Container>
								</AccordionItem>
							</Accordion>
							{/* {paragraphs.map((paragraph, index) => (
								<p
									key={index}
									className='animate__animated animate__backInRight'>
									{paragraph}
								</p>
							))} */}
							<p className='mt-4 animate__animated animate__backInRight mx-3 text-description'>
								{texts.thanks}
							</p>
						</div>
						<Container>
							<Row className='mt-4 mb-4 animate__animated animate__fadeIn animate__delay-2s'>
								{/* 								<h4 className='mb-4 text-center'>
									{
										texts.downloadCV
									}
								</h4> */}
							</Row>
						</Container>
					</Col>
					<Col xs={12} sm={12} md={4}>
						<h1 className='text-left'>
							<motion.svg
								version='1.1'
								id='Layer_1'
								xmlns='http://www.w3.org/2000/svg'
								xmlns:xlink='http://www.w3.org/1999/xlink'
								x='0px'
								y='0px'
								width='15%'
								viewBox='0 0 980 556'
								enable-background='new 0 0 980 556'
								xml:space='preserve'>
								<path
									fill='var(--FirstColor)'
									opacity='1.000000'
									stroke='none'
									d='
								M981.000000,325.531342 
									C978.961548,326.889587 976.821106,327.600098 974.899292,328.694427 
									C881.012878,382.154694 787.146484,435.649933 693.271423,489.130188 
									C689.683960,491.173920 686.034180,493.108185 681.860779,495.396484 
									C681.657166,492.743073 681.362671,490.627533 681.352173,488.510620 
									C681.188110,455.347015 681.122620,422.182739 680.831970,389.020386 
									C680.801880,385.587097 682.925842,384.963165 685.093933,383.843475 
									C741.184265,354.876495 797.271484,325.903503 853.357056,296.927155 
									C865.162109,290.828125 876.958374,284.711914 889.185608,278.382599 
									C887.829102,277.542664 886.792664,276.795837 885.668579,276.219879 
									C818.990417,242.055481 752.305969,207.903503 685.616394,173.761383 
									C683.540405,172.698608 681.822754,171.896881 681.819702,168.795410 
									C681.787598,136.299423 681.533020,103.803696 681.380493,71.307709 
									C681.368042,68.665443 681.654541,66.021782 681.829834,62.882481 
									C683.351318,63.583080 684.513672,64.020012 685.581543,64.624008 
									C782.660095,119.531204 879.709473,174.490143 976.871643,229.248917 
									C981.457458,231.833374 979.257568,235.512817 980.614990,238.838898 
									C981.000000,247.354233 981.000000,255.708450 980.612671,264.719849 
									C980.207275,269.229553 980.189331,273.082123 980.088623,277.397522 
									C980.337280,282.573608 980.668640,287.286804 981.000000,292.000000 
									C981.000000,303.020905 981.000000,314.041779 981.000000,325.531342 
								z'
								/>
								<path
									fill={isDarkTheme ? "#FFFFFF" : "#c2c2c2"}
									opacity='1.000000'
									stroke='none'
									d='
								M352.782898,556.165649 
									C357.537140,542.368286 362.146790,528.518982 367.067657,514.781250 
									C428.224365,344.047394 489.426331,173.329788 551.288696,2.304496 
									C562.439026,1.999261 572.917603,2.037860 583.395264,1.951447 
									C584.932678,1.938767 586.465210,1.331926 588.000000,1.000000 
									C593.354919,1.000000 598.709900,1.000000 604.532410,1.000003 
									C607.571899,1.719778 610.143799,2.439552 613.176514,3.288292 
									C546.911560,187.803879 480.742340,372.053009 414.786560,556.651062 
									C414.555542,557.000000 414.111115,557.000000 413.094177,556.649414 
									C392.608795,556.254517 372.695831,556.210083 352.782898,556.165649 
								z'
								/>
							</motion.svg>
						</h1>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default AboutMe;
