import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Projects from '../components/Projects';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';

import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

const IndexPage = () => {
	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "Programmer.png" }) {
				childImageSharp {
					gatsbyImageData(formats: [WEBP, AVIF], placeholder: TRACED_SVG)
				}
			}
		}
	`);
	const image = getImage(data.file);

	return (
		<Layout>
			<SEO title=' Portfolio - Home ' image={`https://kmankovskyi.com${image.images.fallback.src}`} />
			<Hero Title='Kiril Mankovskyi' SubTitle='Developer' ScrollTo='about' Image={image} />
			<About />
			<Projects />
			<Contact />
		</Layout>
	);
};

export default IndexPage;
