import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub, FiMail } from 'react-icons/fi';
const Footer = () => {
	return (
		<footer className='shadow-sm py-3 w-screen dark:bg-darkmode-darker border-t border-white-darker '>
			<section className='flex flex-col  items-center m-0 max-w-7xl mx-auto'>
				<div className='w-full px-6'>
					<div className='flex justify-between items-center flex-col md:flex-row my-2 md:my-4'>
						<div className='md:justify-center mb-6 md:mb-0 '>
							Kiril Mankovskyi &copy; {new Date().getFullYear()} All rights reserved.
						</div>
						<div className='flex justify-center md:justify-end items-center w-3/12'>
							<a
								className='social-links-footer'
								href='https://github.com/kirillman200'
								target='_blank'
								aria-label='GitHub'
								rel='noreferrer'
							>
								<FiGithub />
							</a>
							<a
								className='social-links-footer'
								href='https://www.linkedin.com/in/kiril-mankovskyi/'
								target='_blank'
								aria-label='LinkedIn'
								rel='noreferrer'
							>
								<FaLinkedinIn />
							</a>
							<a
								className='social-links-footer'
								href='mailto:kmankovskyi@gmail.com'
								target='_blank'
								aria-label='Mail'
								rel='noreferrer'
							>
								<FiMail />
							</a>
						</div>
					</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
