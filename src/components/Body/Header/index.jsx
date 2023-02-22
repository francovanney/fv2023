import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import { Parallax, Background } from "react-parallax";
import { motion } from "framer-motion";
import avatar from "../../../assets/Img/Profile2.jpg";
import { FaGithub, FaInstagram, FaLinkedin, FaBehance } from "react-icons/fa";

const Header = () => {
	return (
		<Parallax strength={180}>
			<Background className='custom-bg'>
				<div
					style={{
						height: 2000,
						width: 2000,
						opacity: 0.15,
						backgroundImage:
							"url('https://raw.githubusercontent.com/francovanney/fv2023/master/src/assets/Img/Fv-mosaico.png')"
					}}
				/>
			</Background>
			<section className='page-section' id='header-section'>
				<Container>
					<Row className='animate__animated animate__fadeInDown'>
						<Col md={8}>
							<h1 id='title'>
								FRANCO VANNEY
							</h1>
							<h5>
								Desarrollador
								Front-End
							</h5>
							<Row className='mt-3'>
								<Col md={12}>
									<a
										href='https://www.linkedin.com/in/franco-vanney-0b9273a1/'
										target={
											"_blank"
										}>
										<FaLinkedin
											className='mx-2 custom-icon'
											size='30px'
										/>
									</a>
									<a
										href='https://github.com/francovanney'
										target={
											"_blank"
										}>
										<FaGithub
											className='mx-2 custom-icon'
											size='30px'
										/>
									</a>
									<a
										href='https://www.behance.net/francovanney'
										target={
											"_blank"
										}>
										<FaBehance
											className='mx-2 custom-icon'
											size='30px'
										/>
									</a>
									<a
										href='https://www.instagram.com/francovanney/'
										target={
											"_blank"
										}>
										<FaInstagram
											className='mx-2 custom-icon'
											size='30px'
										/>
									</a>
								</Col>
							</Row>
						</Col>
						<Col md={4}>
							<motion.img
								whileHover={{
									scale: 1
								}}
								initial={{
									scale: 0.9
								}}
								transition={{
									type: "spring",
									duration: 2
								}}
								id='img-pattern'
								src={avatar}
								className='banner'
							/>
						</Col>
						<Col md={1}></Col>
					</Row>
				</Container>
			</section>
		</Parallax>
	);
};

export default Header;
