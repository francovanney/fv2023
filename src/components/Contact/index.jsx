import { Container, Modal } from "react-bootstrap";
import { Formik, Form, Field, FastField } from "formik";
import * as Yup from "yup";
import { Button, Form as BootstrapForm, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

const validationSchema = Yup.object().shape({
	name: Yup.string().required("Este campo es obligatorio"),
	company: "",
	message: ""
});

const Contact = () => {
	const [showModal, setShowModal] = useState(false);

	function sendForm(values) {
		emailjs.send(
			"service_v1a6wdt",
			"template_6wsp1e5",
			values,
			"t5VRn93ztSrrfLBVy"
		).then(
			(result) => {
				setShowModal(true);
			},
			(error) => {
				console.log(
					"Error al enviar formulario",
					error.text
				);
			}
		);
	}

	return (
		<section className='page-section' id='contact-section'>
			<Container className='container mt-4'>
				<Container className='mb-4'>
					<h1>Contacto</h1>
				</Container>
				<Container id='contact-div'>
					<Formik
						initialValues={{
							name: "",
							company: "",
							message: ""
						}}
						validationSchema={
							validationSchema
						}
						onSubmit={(
							values,
							{ resetForm }
						) => {
							sendForm(values);
							resetForm();
						}}>
						{({
							errors,
							touched,
							isSubmitting
						}) => (
							<Container>
								<Form>
									<Row>
										<Col
											md={
												12
											}
											className='my-2'>
											<BootstrapForm.Group>
												<BootstrapForm.Label>
													Nombre y Apellido
												</BootstrapForm.Label>
												<Field
													placeholder='Ingresá tu nombre y apellido'
													name='name'
													id='name'
													as={
														BootstrapForm.Control
													}
													isInvalid={
														touched.name &&
														errors.name
													}
												/>
												<BootstrapForm.Control.Feedback type='invalid'>
													{
														errors.name
													}
												</BootstrapForm.Control.Feedback>
											</BootstrapForm.Group>
										</Col>

										<Col
											md={
												12
											}
											className='my-2'>
											<BootstrapForm.Group>
												<BootstrapForm.Label>
													Empresa
												</BootstrapForm.Label>
												<Field
													placeholder='Ingresá tu empresa'
													name='company'
													id='company'
													as={
														BootstrapForm.Control
													}
													isInvalid={
														touched.company &&
														errors.company
													}
												/>
												<BootstrapForm.Control.Feedback type='invalid'>
													{
														errors.company
													}
												</BootstrapForm.Control.Feedback>
											</BootstrapForm.Group>
										</Col>
										<Col
											md={
												12
											}
											className='my-2'>
											<BootstrapForm.Group>
												<BootstrapForm.Label>
													Mensaje
												</BootstrapForm.Label>
												<FastField
													name='message'
													id='message'>
													{({
														field
													}) => (
														<textarea
															placeholder='Ingresá tu mensaje'
															rows={
																4
															}
															className='form-control'
															{...field}
														/>
													)}
												</FastField>
												<BootstrapForm.Control.Feedback type='invalid'>
													{
														errors.message
													}
												</BootstrapForm.Control.Feedback>
											</BootstrapForm.Group>
										</Col>
									</Row>

									<motion.button
										type='submit'
										className='my-4'
										id='button-custom'
										whileHover={{
											scale: 1.025
										}}
										whileTap={{
											scale: 0.9
										}}>
										ENVIAR
									</motion.button>
								</Form>
							</Container>
						)}
					</Formik>
				</Container>
			</Container>
			{showModal && (
				<Modal
					show={showModal}
					centered
					onHide={() => setShowModal(false)}>
					<Modal.Header
						closeButton></Modal.Header>
					<Modal.Body>
						El formulario ha sido enviado
						exitosamente.
						<br />
						¡Gracias por comunicarte
						conmigo!
					</Modal.Body>
					<Modal.Footer>
						<Button
							onClick={() =>
								setShowModal(
									false
								)
							}>
							Cerrar
						</Button>
					</Modal.Footer>
				</Modal>
			)}
		</section>
	);
};

export default Contact;
