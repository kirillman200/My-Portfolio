import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/Hero';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectPage = ({ data: { cms: { project } } }) => (
	<React.Fragment>
		<Layout>
			<SEO title={project.title} />
			<Hero
				Title={project.title}
				SubTitle=''
				ScrollTo={project.slug}
				ProjectImage={project.image.url}
				FallbackAltForImg={project.image.altName}
			/>
			<div id={project.slug} className='w-screen py-32'>
				<div className='max-w-5xl mx-auto p-10 shadow-2xl rounded-lg'>
					<h2 className='section-title'> Project Description </h2>
					<div className='flex justify-center pb-8'>
						<a
							className='social-links-footer'
							href={project.githubLink}
							target='_blank'
							aria-label='GitHub'
							rel='noreferrer'
						>
							<FiGithub />
						</a>
						<a
							className='social-links-footer'
							href={project.liveLink}
							target='_blank'
							aria-label='Live'
							rel='noreferrer'
						>
							<FiExternalLink />
						</a>
					</div>
					<div className='text-center'> {project.description.markdown} </div>
					<div className='py-8 grid col-span-1 justify-center '>
						<h3 className='section-title'> Framework </h3>{' '}
						<img
							className='rounded-lg'
							src={project.frameworkImage.url}
							alt={project.frameworkImage.altName}
						/>{' '}
					</div>
				</div>
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
					markdown
				}
				frameworkImage {
					altName
					fileName
					url(
						transformation: {
							document: { output: { format: webp } }
							image: { resize: { height: 300, width: 600, fit: max } }
						}
					)
				}
				image {
					altName
					fileName
					url(
						transformation: {
							document: { output: { format: webp } }
							image: { resize: { height: 300, width: 600, fit: max } }
						}
					)
				}
				liveLink
				githubLink
			}
		}
	}
`;

export default ProjectPage;
