import { Container, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutMe = () => {
	const image1 =
		"https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
	const image2 =
		"https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
	const image3 =
		"https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
	const image4 =
		"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";
	return (
		<Container>
			<Row>
				<Col xs={12} sm={12} md={4}>
					<h1 className='text-left animate__animated animate__fadeInDown'>
						Acerca de mí
					</h1>
				</Col>
				<Col xs={12} sm={12} md={8}>
					<h1 className='mt-2 mb-2 animate__animated animate__fadeInDown'>
						¡Hola!
					</h1>
					<p
						id='text-about'
						className='animate__animated animate__backInRight'>
						Soy Franco Vanney, desarrollador
						front-end y diseñador
						multidisciplinario. Actualmente
						vivo en la ciudad de Junín -
						Buenos Aires, Argentina. Un team
						player, curioso, creativo y
						detallista. Me apasiona el
						proceso de creativo, darle a
						cada elemento un propósito,
						permitir compartir distintos
						puntos de vista y, en última
						instancia, conectarlo al código.
						Creo que el diseño centrado en
						el ser humano crea productos y
						servicios para resolver
						necesidades, a su vez
						transmitiendo valores y
						emociones positivas. Como
						front-end me dedico escribir
						código en distintos lenguajes
						con un énfasis en el proceso de
						pensar, planificar y crear
						elementos visuales atractivos
						con el fin de lograr una
						excelente experiencia para el
						usuario. Mi objetivo es aprender
						algo nuevo todos los días para
						aumentar mi crecimiento personal
						y profesional. Me gustan mucho
						las mascotas, la música y andar
						en bici. Soy músico, toco
						guitarras y piano. Los fines de
						semana me dedico a ser técnico
						en iluminación y video en
						eventos profesionales. Sin más
						que agregar, ¡espero que
						disfrutes muchos de los
						proyectos que muestro a
						continuación.
						<p className='mt-4 animate__animated animate__backInRight'>
							¡Gracias por visitar mi
							portfolio!
						</p>
					</p>
					<Row className='mt-4 animate__animated animate__fadeIn animate__delay-2s'>
						<h4 className='mb-4'>
							Descargá mi CV
						</h4>
						<Col
							xs={12}
							md={6}
							className={"mb-4"}>
							<Button>
								CV ENGLISH
							</Button>
						</Col>
						<Col xs={12} md={6}>
							<Button>
								CV ESPAÑOL
							</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default AboutMe;
