import React from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { navigate } from 'gatsby-link';
// import ReCAPTCHA from 'react-google-recaptcha';

const service = process.env.GATSBY_SERVICE_ID;
const template = process.env.GATSBY_TEMPLATE_ID;
const user = process.env.GATSBY_USER_ID;

const Contact = () => {
	const { register, handleSubmit, errors } = useForm();
	// const recaptchaRef = React.createRef();
	function sendEmail(e){
		e.preventDefault();
		// const params = {
		// 	'g-recaptcha-response': e
		// };
		emailjs.sendForm(service, template, e.target, user).then(
			(response) => {
				console.log('SUCCESS!', response.status, response.text);
				navigate('success');
			},
			(error) => {
				alert('There was an error during submission');
				console.log('FAILED...', error);
			}
		);
		e.target.reset();
	}

	return (
		<div id='contact' className='py-20 md:py-32 max-w-7xl mx-auto'>
			<div className=''>
				<form onSubmit={sendEmail} className='max-w-lg  mx-auto rounded-lg shadow-xl overflow-hidden p-6'>
					<h2 className='section-title pb-4'> Contact Me </h2>
					<p className='text-center'>
						{' '}
						You can email to{' '}
						<a className='text-white-darker' href='mailto:kmankovskyi@gmail.com'>
							{' '}
							kmankovskyi@gmail.com
						</a>{' '}
						or using form below{' '}
					</p>
					<div className='form-element-wrap'>
						{' '}
						<input
							type='text'
							className='form-input'
							placeholder=' '
							name='name'
							required
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
							required
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
							required
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
					{/* <ReCAPTCHA sitekey={process.env.GATSBY_CAPTCHA_SITE_KEY} onChange={sendEmail} /> */}
				</form>
			</div>
		</div>
	);
};

export default Contact;
