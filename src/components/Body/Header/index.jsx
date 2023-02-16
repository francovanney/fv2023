import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import avatar from "../../../assets/Img/profile.jpg";

const Header = () => {
	return (
		<section className='page-section' id='header-section'>
			<Container>
				<Row className='animate__animated animate__fadeInDown'>
					<Col md={8}>
						<h1 id='title'>
							FRANCO VANNEY
						</h1>
						<h5>Desarrollador Front-End</h5>
					</Col>
					<Col md={3}>
						<img src={avatar} width={250} className='banner' />
					</Col>
					<Col md={1}>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Header;
