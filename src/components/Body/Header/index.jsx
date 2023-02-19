import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import { Parallax, Background } from "react-parallax";
import { motion } from "framer-motion";
import avatar from "../../../assets/Img/profile.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

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
							"url('http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSjHbAOP4JVKfM1zXYtcwQX3dc7Lp89JMrQWG4LYPKaQ3DxbXxejNIsSsKOQitF-T4MZcbRDHtQq3qU5fuPkIQ')"
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
							<Row className="mt-3">
								<Col md={12}>
									<a href='#'>
										<FaGithub
											className='mx-2 custom-icon'
											size='30px'
										/>
									</a>
									<a href='#'>
										<FaInstagram
											className='mx-2 custom-icon'
											size='30px'
										/>
									</a>
									<a href='#'>
										<FaLinkedin
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
