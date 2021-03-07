import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const ProjectPage = ({ data: { cms: { project } } }) => (
	<React.Fragment>
		<h1> {project.title} </h1>
		<p> {project.description.text} </p>
		{/* <img src={project.frameworkImage} alt='frame' /> */}
		{/* <img src={image} alt='hello' /> */}
		{
			(project.frameworkImage.url = !null ? (
				<div>
					{' '}
					<img src={project.frameworkImage.url} />{' '}
				</div>
			) : (
				<div>No Image</div>
			))
		}

		{/* <img src={project.frameworkImage.url} /> */}
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
				}
			}
		}
	}
`;

export default ProjectPage;
