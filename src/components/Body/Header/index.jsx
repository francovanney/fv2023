import { Container, Row, Col } from "react-bootstrap";
import "animate.css";

const Header = () => {
	return (
		<section className='page-section' id='header-section'>
			<Container>
				<Row className='animate__animated animate__fadeInDown'>
					<Col md={12} >
						<h1
							id='title'
							>
							FRANCO VANNEY
						</h1>
					</Col>
					<Col md={12}>
						<h5>Desarrollador Front-End</h5>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Header;
