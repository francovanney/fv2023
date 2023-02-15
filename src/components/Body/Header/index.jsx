import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
	return (
		<section className='page-section' id='header-section'>
			<Container>
				<Row>
					<Col md={12}>
						<h1 id='title'>
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
