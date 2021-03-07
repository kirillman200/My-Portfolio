import { Link } from 'gatsby';
import React from 'react';
import Coding from '../images/coding.jpg';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import Img from 'gatsby-image';
import programmer from '../images/programmer.svg';
import BackgroundImage from 'gatsby-background-image';

const Hero = ({ Title, SubTitle, ScrollTo }) => {
	const data = useStaticQuery(
		graphql`
			query {
				file(relativePath: { eq: "programmer.svg" }) {
					childImageSharp {
						fluid {
							tracedSVG
						}
					}
				}
			}
		`
	);

	// Set ImageData.
	// const imageData = data.file.childImageSharp.fluid.tracedSVG;

	return (
		// <BackgroundImage
		// 	Tag='section'
		// 	className='text-black w-screen hero-bg object-cover flex flex-col justify-center items-center '
		// 	fluid={imageData}
		// >

		<section
			id='hero'
			className='text-black my-auto flex flex-col justify-center w-screen hero-bg object-cover  items-center'
		>
			<div className='hero-black-overlay flex  justify-between'>
				<div className='mx-auto my-auto  w-full  text-center items-center '>
					<h1 className=' lg:text-7xl md:text-5xl sm:text-5xl text-3xl '> {Title}</h1>
					<h2 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl italic mt-5'>{SubTitle}</h2>
				</div>
				<div>
					<img src={programmer} alt='Guy with computers' />
				</div>
			</div>
			<div className='mt-10 flex justify-center justify-items-center '>
				<LinkS to={ScrollTo} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
					{/* Add smothscroll! */}
					<svg
						className='cursor-pointer hover:text-red transition-all duration-200 ease-in animate-bounce items-center w-8 h-8'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
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
		// {/* </BackgroundImage> */}

		// <BackgroundImage Tag='section' className={className} fluid={imageData} backgroundColor={`#040e18`}>
		// 	<h2>gatsby-background-image</h2>
		// </BackgroundImage>
	);
};
export const StyledBG = styled(BackgroundImage)`

height: 100vh; 
`;
export default Hero;
