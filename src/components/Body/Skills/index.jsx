import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactLogo from "../../../assets/Logos/React-icon.svg";
import HtmlLogo from "../../../assets/Logos/html-1.svg";
import CssLogo from "../../../assets/Logos/css-3.svg";
import JsLogo from "../../../assets/Logos/logo-javascript.svg";
import FigmaLogo from "../../../assets/Logos/figma-5.svg";
import BootstrapLogo from "../../../assets/Logos/bootstrap-5-1.svg";
import NpmLogo from "../../../assets/Logos/npm-square-red-1.svg";
import AdobeXD from "../../../assets/Logos/adobe-xd-1.svg";
import AdobePS from "../../../assets/Logos/adobe-photoshop-2.svg";
import Jira from "../../../assets/Logos/jira-1.svg";
import Postman from "../../../assets/Logos/postman.svg";
import VsCode from "../../../assets/Logos/visual-studio-code-1.svg";
//import NpmLogo from "../../../assets/Logos/npm-square-red-1.svg";

const Skills = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 5,
			slidesToSlide: 1 // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 4,
			slidesToSlide: 1 // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 2,
			slidesToSlide: 1 // optional, default to 1.
		}
	};
	return (
		<section className='page-section' id='skills-section'>
			<Container className='container mt-4 animate__animated animate__fadeIn animate__delay-2s'>
				<Row>
					<Col className='mt-4 mb-4'>
						<h2>Skills</h2>
					</Col>
					<Col>
						<Carousel
							//className="justify-content-center"
							swipeable={false}
							draggable={true}
							showDots={false}
							responsive={responsive}
							autoPlay={true}
							ssr={true} // means to render carousel on server-side.
							infinite={true}
							autoPlaySpeed={900}
							transitionDuration={900}
							arrows={false}>
							<div>
								<img
									className='img-fluid'
									src={
										HtmlLogo
									}
									width='80'></img>
							</div>
							<div>
								<img
									className='img-fluid'
									src={
										CssLogo
									}
									width='80'></img>
							</div>
							<div>
								<img
									className='img-fluid'
									src={
										JsLogo
									}
									width='80'></img>
							</div>
							<div>
								<img
									className='img-fluid'
									src={
										ReactLogo
									}
									width='80'></img>
							</div>
							<div>
								<img
									className='img-fluid'
									src={
										NpmLogo
									}
									width='80'></img>
							</div>
							<div>
								<img
									className='img-fluid'
									src={
										FigmaLogo
									}
									width='150'></img>
							</div>
							<div>
								<img
									className='img-fluid'
									src={
										BootstrapLogo
									}
									width='100'></img>
							</div>
							<div>
								<img
									className='img-fluid'
									src={
										AdobeXD
									}
									width='100'></img>
							</div>
							<div>
								<img
									className='img-fluid'
									src={
										AdobePS
									}
									width='100'></img>
							</div>
							<div>
								<img
									className='img-fluid'
									src={
										BootstrapLogo
									}
									width='100'></img>
							</div>
							<div>
								<img
									className='img-fluid'
									src={
										Jira
									}
									width='100'></img>
							</div>
							<div>
								<img
									className='img-fluid'
									src={
										VsCode
									}
									width='100'></img>
							</div>
							<div>
								<img
									className='img-fluid'
									src={
										Postman
									}
									width='100'></img>
							</div>
						</Carousel>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Skills;
