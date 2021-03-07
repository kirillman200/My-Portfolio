import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Projects from '../components/Projects';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';

const IndexPage = () => (
	<Layout>
		<SEO title=' Main ' />
		<Hero Title='Kiril Mankovskyi' SubTitle='Developer' ScrollTo='about' />
		<About />
		<Projects />
		<Contact />
		<Projects />
		<Projects />
	</Layout>
);

export default IndexPage;
