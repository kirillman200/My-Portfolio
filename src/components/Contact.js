import React from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const service = process.env.GATSBY_SERVICE_ID;
const template = process.env.GATSBY_TEMPLATE_ID;
const user = process.env.GATSBY_USER_ID;

const Contact = () => {
	const { register, handleSubmit, errors } = useForm();
	function sendEmail(e){
		e.preventDefault();
		emailjs.sendForm(service, template, e.target, user).then(
			(response) => {
				console.log('SUCCESS!', response.status, response.text);
			},
			(error) => {
				console.log('FAILED...', error);
			}
		);
		e.target.reset();
	}

	return (
		<div id='contact' className='py-32'>
			<div className=''>
				<form onSubmit={sendEmail} className='max-w-lg  mx-auto rounded-lg shadow-xl overflow-hidden p-6'>
					<h2 className='section-title'> Contact Me </h2>
					<div className='form-element-wrap'>
						{' '}
						<input
							type='text'
							className='form-input'
							placeholder=' '
							name='name'
							ref={register({ required: true })}
						/>
						<label className='form-label' htmlFor='name'>
							{' '}
							Your Name
						</label>
					</div>
					<div className='form-element-wrap'>
						{' '}
						<input
							type='email'
							className='form-input'
							placeholder=' '
							name='email'
							ref={register({ required: true })}
						/>
						<label className='form-label' htmlFor='email'>
							{' '}
							Your Email
						</label>
					</div>
					<div className='form-element-wrap'>
						{' '}
						<input type='text' className='form-input' placeholder=' ' name='subject' ref={register} />
						<label className='form-label' htmlFor='subject'>
							{' '}
							Your Subject
						</label>
					</div>
					<div className='form-element-wrap'>
						{' '}
						<textarea
							className='form-input'
							id='message'
							cols='25'
							rows='3'
							placeholder=' '
							name='message'
							ref={register({ required: true })}
						/>
						<label className='form-label' htmlFor='message'>
							{' '}
							Your Message
						</label>
					</div>

					<div>
						<button type='submit' value='Send Message' className='common-btn'>
							{' '}
							Submit{' '}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
