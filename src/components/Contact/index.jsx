import { Container } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, Form as BootstrapForm, Row, Col } from "react-bootstrap";

const validationSchema = Yup.object().shape({
	nombre: Yup.string().required("Este campo es obligatorio"),
	empresa: Yup.string().required("Este campo es obligatorio"),
	mensaje: Yup.string().required("Este campo es obligatorio")
});

const Contact = () => {
	return (
		<section className='page-section'>
			<Container>
				<h2>Contact</h2>
				<Formik
					initialValues={{
						nombre: "",
						empresa: "",
						mensaje: ""
					}}
					validationSchema={validationSchema}
					onSubmit={(values, { resetForm }) => {
						console.log(values);
						resetForm();
					}}>
					{({ errors, touched }) => (
						<Form>
							<Row>
								<Col md={6}>
									<BootstrapForm.Group>
										<BootstrapForm.Label>
											Nombre
										</BootstrapForm.Label>
										<Field
											name='nombre'
											as={
												BootstrapForm.Control
											}
											isInvalid={
												touched.nombre &&
												errors.nombre
											}
										/>
										<BootstrapForm.Control.Feedback type='invalid'>
											{
												errors.nombre
											}
										</BootstrapForm.Control.Feedback>
									</BootstrapForm.Group>
								</Col>

								<Col md={6}>
									<BootstrapForm.Group>
										<BootstrapForm.Label>
											Empresa
										</BootstrapForm.Label>
										<Field
											name='empresa'
											as={
												BootstrapForm.Control
											}
											isInvalid={
												touched.empresa &&
												errors.empresa
											}
										/>
										<BootstrapForm.Control.Feedback type='invalid'>
											{
												errors.empresa
											}
										</BootstrapForm.Control.Feedback>
									</BootstrapForm.Group>
								</Col>
							</Row>

							<BootstrapForm.Group>
								<BootstrapForm.Label>
									Mensaje
								</BootstrapForm.Label>
								<Field
									name='mensaje'
									as={
										BootstrapForm.Control
									}
									as='textarea'
									isInvalid={
										touched.mensaje &&
										errors.mensaje
									}
								/>
								<BootstrapForm.Control.Feedback type='invalid'>
									{
										errors.mensaje
									}
								</BootstrapForm.Control.Feedback>
							</BootstrapForm.Group>

							<Button
								variant='primary'
								type='submit'>
								Enviar
							</Button>
						</Form>
					)}
				</Formik>
			</Container>
		</section>
	);
};

export default Contact;
