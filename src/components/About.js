import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const About = () => {
	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "ResumeDark.png" }) {
				childImageSharp {
					gatsbyImageData(formats: [WEBP, AVIF], placeholder: TRACED_SVG)
				}
			}
		}
	`);

	const image = getImage(data.file);
	return (
		<div id='about' className=' w-screen py-20 md:py-32 '>
			<div className=' mx-auto '>
				<div className='p-10  grid md:flex justify-around '>
					<div className='max-w-lg'>
						<GatsbyImage image={image} alt='Resume' />
					</div>
					<div className='max-w-lg my-auto'>
						<div>
							<h2 className='section-title'> More About Me</h2>
						</div>
						<div className='max-w-xl'>
							<p className='text-center'>
								Proficient in various platforms and languages. Experienced with the latest cutting-edge
								development tools and procedures. Able to effectively self-manage during independent
								projects, as well as collaborate as part of a productive team.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
