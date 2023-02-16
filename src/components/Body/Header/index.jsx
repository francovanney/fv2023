import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import { Parallax, Background } from "react-parallax";
import avatar from "../../../assets/Img/profile.jpg";

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
							"url('https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEORycF0cw24p4FdEHGkjCgaNqd_gFNRbmD_B3_6BaCZn3nsvNd4jcUo0rhmy9MDnakZwZJZWp-fJ1Ug2Sm0g6rF2VCi1Kg=w1366-h560')"
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
						</Col>
						<Col md={3}>
							<img
								id='img-pattern'
								src={avatar}
								width={250}
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
