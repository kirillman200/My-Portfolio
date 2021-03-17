import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

const Success = () => {
	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "Submission.png" }) {
				childImageSharp {
					gatsbyImageData(formats: [WEBP, AVIF], placeholder: TRACED_SVG)
				}
			}
		}
	`);
	const image = getImage(data.file);
	return (
		<Layout>
			<SEO title='Submission' />
			<div className='mx-auto h-screen my-auto flex-col flex  justify-center items-center'>
				<h1 className='section-title'>Thank you for submission </h1>

				<GatsbyImage image={image} alt='Resume' />
				<div className='mt-40  flex justify-center'>
					<Link to='/'>
						<button className='common-btn md:py-10 md:px-32 md:text-4xl'> Back Home</button>
					</Link>{' '}
				</div>
			</div>
		</Layout>
	);
};

export default Success;
