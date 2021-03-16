import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

const NotFoundPage = () => {
	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "404.png" }) {
				childImageSharp {
					gatsbyImageData(formats: [WEBP, AVIF], placeholder: TRACED_SVG)
				}
			}
		}
	`);
	const image = getImage(data.file);
	return (
		<Layout>
			<SEO title='404: Not found' />
			<div className='mx-auto h-screen my-auto flex-col flex  justify-center items-center'>
				<GatsbyImage image={image} alt='Resume' />
				<div className='mt-40  flex justify-center'>
					<button className='common-btn py-10 px-32 text-4xl'>
						{' '}
						<Link to='/'> Back Home </Link>{' '}
					</button>
				</div>
			</div>
		</Layout>
	);
};

export default NotFoundPage;
