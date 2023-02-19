import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
	return (
		<footer className='text-white'>
			<Container>
				<Row id='footer-row'>
					<Col
						md={6}
						className={
							"d-flex flex-column align-items-center justify-content-center"
						}>
						<h5 className='mb-3'>Links</h5>
						<Row>
							<Col md={12}>
								<a href='#'>
									<FaGithub
										className='mx-2 custom-icon'
										size='25px'
									/>
								</a>
								<a href='#'>
									<FaInstagram
										className='mx-2 custom-icon'
										size='25px'
									/>
								</a>
								<a href='#'>
									<FaLinkedin
										className='mx-2 custom-icon'
										size='25px'
									/>
								</a>
							</Col>
						</Row>
					</Col>
					<Col
						md={6}
						className={
							"d-flex flex-column align-items-center justify-content-center"
						}>
						<h5 className='mb-3'>Contacto</h5>
						<Row>
							<Col md={12}>
								<a href='#'>
									<FaGithub
										className='mx-2 custom-icon'
										size='25px'
									/>
								</a>
								<a href='#'>
									<FaInstagram
										className='mx-2 custom-icon'
										size='25px'
									/>
								</a>
								<a href='#'>
									<FaLinkedin
										className='mx-2 custom-icon'
										size='25px'
									/>
								</a>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
