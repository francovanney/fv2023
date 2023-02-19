import { Container, Modal } from "react-bootstrap";
import { Formik, Form, Field, FastField } from "formik";
import * as Yup from "yup";
import { Button, Form as BootstrapForm, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useState } from "react";

const validationSchema = Yup.object().shape({
	name: Yup.string().required("Este campo es obligatorio"),
	company: Yup.string().required("Este campo es obligatorio"),
	message: ""
});

const Contact = () => {
	const [showModal, setShowModal] = useState(true);

	const handleSubmit = (values, { setSubmitting, resetForm }) => {
		console.log(values);
		resetForm();
		setSubmitting(false);
		setShowModal(true);
	};

	return (
		<section className='page-section' id='contact-section'>
			<Container className='mb-4'>
				<h2>Contact</h2>
			</Container>
			<Container id='contact-div'>
				<Formik
					initialValues={{
						name: "",
						company: "",
						message: ""
					}}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}>
					{({
						errors,
						touched,
						isSubmitting
					}) => (
						<Form>
							<Row>
								<Col
									md={12}
									className='my-2'>
									<BootstrapForm.Group>
										<BootstrapForm.Label>
											Nombre
										</BootstrapForm.Label>
										<Field
											placeholder='Ingresá tu nombre'
											name='name'
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
									md={12}
									className='my-2'>
									<BootstrapForm.Group>
										<BootstrapForm.Label>
											Empresa
										</BootstrapForm.Label>
										<Field
											placeholder='Ingresá tu empresa'
											name='company'
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
									md={12}
									className='my-2'>
									<BootstrapForm.Group>
										<BootstrapForm.Label>
											Mensaje
										</BootstrapForm.Label>
										{/* 										<Field
											placeholder='Ingresá un mensaje'
											name='message'
											as={
												BootstrapForm.Control
											}
											isInvalid={
												touched.message &&
												errors.message
											}
										/> */}
										<FastField name='message'>
											{({
												field
											}) => (
												<textarea
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
								className='my-4'
								id='button-custom'
								whileHover={{
									scale: 1.1
								}}
								whileTap={{
									scale: 0.9
								}}>
								ENVIAR
							</motion.button>

							<Modal
								show={showModal}
								centered
								onHide={() =>
									setShowModal(
										false
									)
								}>
								<Modal.Header
									closeButton></Modal.Header>
								<Modal.Body>
									El
									formulario
									ha sido
									enviado
									exitosamente.
									<br />
									¡Gracias
									por
									comunicarte
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
						</Form>
					)}
				</Formik>
			</Container>
		</section>
	);
};

export default Contact;
