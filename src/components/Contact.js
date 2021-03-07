import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import emailjs from 'emailjs-com';

const service = process.env.GATSBY_SERVICE_ID;
const template = process.env.GATSBY_TEMPLATE_ID;
const user = process.env.GATSBY_USER_ID;

const Contact = () => {
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
		<div id='contact' className='py-16   text-black'>
			<div className=''>
				<form onSubmit={sendEmail} className='max-w-lg  mx-auto rounded-lg shadow-xl overflow-hidden p-6'>
					<h2 className='section-title'> Contact Me </h2>
					<div className='form-element-wrap'>
						{' '}
						<input type='text' className='form-input' placeholder=' ' name='name' />
						<label className='form-label'> Your Name</label>
					</div>
					<div className='form-element-wrap'>
						{' '}
						<input type='email' className='form-input' placeholder=' ' name='email' />
						<label className='form-label'> Your Email</label>
					</div>
					<div className='form-element-wrap'>
						{' '}
						<input type='text' className='form-input' placeholder=' ' name='subject' />
						<label className='form-label'> Your Subject</label>
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
						/>
						<label className='form-label'> Your Message</label>
					</div>

					<div>
						<button
							type='submit'
							value='Send Message'
							className='px-8 py-2 bg-white-darker text-blue-light hover:bg-blue-light hover:text-white-darker transition-all duration-300 rounded-lg'
						>
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
