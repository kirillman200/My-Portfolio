import React from 'react';
import { Link as LinkS } from 'react-scroll';
import { GatsbyImage } from 'gatsby-plugin-image';

const Hero = ({ Title, SubTitle, ScrollTo, Image, ProjectImage, FallbackAltForImg }) => {
	return (
		<section id='hero' className='px-10 md:py-32 py-32 pb-6 mx-auto'>
			<div className='md:flex grid justify-around '>
				<div className=' my-auto max-w-lg text-center '>
					<h1 className=' lg:text-7xl md:text-5xl text-5xl'> {Title}</h1>
					<h2 className='lg:text-5xl md:text-4xl text-3xl italic mt-5'>{SubTitle}</h2>
				</div>
				<div className='max-w-lg '>
					{Image ? (
						<GatsbyImage image={Image} alt='Guy with computers' />
					) : (
						<div>
							<img className='rounded-lg' src={ProjectImage} alt={FallbackAltForImg} />
						</div>
					)}
				</div>
			</div>
			<div className='mt-10 flex justify-center justify-items-center '>
				<LinkS to={ScrollTo} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
					<svg
						className='cursor-pointer hover:text-white-darker transition-all duration-200 ease-in animate-bounce items-center w-8 h-8'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='2 2 20 20'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M19 14l-7 7m0 0l-7-7m7 7V3'
						/>
					</svg>
				</LinkS>
			</div>
		</section>
	);
};

export default Hero;
