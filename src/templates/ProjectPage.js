import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/Hero';
const ProjectPage = ({ data: { cms: { project } } }) => (
	<React.Fragment>
		<Layout>
			{console.log(
				'🚀 ~ file: ProjectPage.js ~ line 12 ~ project.frameworkImage.url',
				project.frameworkImage.url
			)}
			<SEO title={project.title} />
			<Hero Title={project.title} SubTitle='' ScrollTo={project.slug} ProjectImage={project.image.url} />
			<div id={project.slug}>
				<p> {project.description.text} </p>
				{/* <img src={project.frameworkImage} alt='frame' /> */}
				{/* <img src={image} alt='hello' /> */}
				<div>
					{' '}
					<img src={project.frameworkImage.url} alt='' />{' '}
				</div>

				{/* <img src={project.frameworkImage.url} /> */}
			</div>
		</Layout>
	</React.Fragment>
);

export const pageQuery = graphql`
	query ProjectPageQuery($id: ID!) {
		cms {
			project(where: { id: $id }) {
				title
				slug
				description {
					text
				}
				frameworkImage {
					fileName
					mimeType
					size
					url
				}
				image {
					fileName
					url
				}
			}
		}
	}
`;

export default ProjectPage;
