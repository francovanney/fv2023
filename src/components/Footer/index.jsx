import {
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaCopyright,
	FaBehance
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { CopyButton } from "@carbon/react";

const Footer = () => {
	const { isDarkTheme } = useContext(ThemeContext);
	return (
		<footer
			className={
				isDarkTheme ? "footer-dark text-light" : "text-dark footer-light"
			}>
			<Container>
				<Row id='footer-row'>
					<Col
						md={6}
						className={
							"d-flex flex-column align-items-center justify-content-center mb-4  mb-md-0"
						}>
						<h5 className='mb-3'>Social Links</h5>
						<Row>
							<Col md={12}>
								<a
									href='https://www.linkedin.com/in/franco-vanney-0b9273a1/'
									target={"_blank"}>
									<FaLinkedin
										className={
											isDarkTheme
												? "mx-2 footer-icon-dark"
												: "mx-2 footer-icon-light"
										}
										size='25px'
									/>
								</a>
								<a href='https://github.com/francovanney' target={"_blank"}>
									<FaGithub
										className={
											isDarkTheme
												? "mx-2 footer-icon-dark"
												: "mx-2 footer-icon-light"
										}
										size='25px'
									/>
								</a>
								<a
									href='https://www.behance.net/francovanney'
									target={"_blank"}>
									<FaBehance
										className={
											isDarkTheme
												? "mx-2 footer-icon-dark"
												: "mx-2 footer-icon-light"
										}
										size='30px'
									/>
								</a>
								<a
									href='https://www.instagram.com/francovanney/'
									target={"_blank"}>
									<FaInstagram
										className={
											isDarkTheme
												? "mx-2 footer-icon-dark"
												: "mx-2 footer-icon-light"
										}
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
						<h5 className='mb-3'>Links</h5>
						<Row>
							<Col md={12}>
								<div
									className={`d-flex align-items-center ${isDarkTheme ? "text-light" : ""}`}>
									<CopyButton
										className='mx-2'
										size='xs'
										onClick={() => {
											navigator.clipboard.writeText("francoavanney@gmail.com");
										}}
									/>
									<a
										className={`ml-2 ${isDarkTheme ? "text-light" : ""}`}
										href='mailto:francoavanney@gmail.com?subject=Contacto%20desde%20porftolio'>
										francoavanney@gmail.com
									</a>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Container className='text-center pt-4'>
						<Col md={12}>
							<p>
								<span>Franco Vanney {""}</span>
							</p>
							<p>
								<FaCopyright />
								<span className='m-2'>{new Date().getFullYear()}</span>
							</p>
						</Col>
					</Container>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
