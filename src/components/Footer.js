import React from 'react';
import { Link } from 'gatsby';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
const Footer = () => {
	return (
		<footer className=' py-3 w-screen text-black border-t border-red '>
			<div className='flex flex-col justify-items-center items-center m-0'>
				<section className='w-4/5'>
					<section className='flex justify-between flex-col md:flex-row items-center my-2 md:my-4'>
						<small className='md:justify-center mb-6 md:mb-0 '>
							Kiril Mankovskyi &copy; {new Date().getFullYear()} All rights reserved.
						</small>
						<div className='flex justify-center md:justify-end items-center w-3/12'>
							<a
								className='social-links-footer'
								href='https://github.com/kirillman200'
								target='_blank'
								aria-label='GitHub'
							>
								<FiGithub />
							</a>
							<a
								className='social-links-footer'
								href='https://www.linkedin.com/in/kiril-mankovskyi/'
								target='_blank'
								aria-label='LinkedIn'
							>
								<FaLinkedinIn />
							</a>
						</div>
					</section>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
