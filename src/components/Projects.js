import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const pageQuery = graphql`
	{
		cms {
			projects(first: 2) {
				title
				slug
				description {
					text
				}
				categories
				shortDescription
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

const Projects = () => {
	const { cms: { projects } } = useStaticQuery(pageQuery);
	return (
		<section id='projects' className=' m-0 py-20 md:py-32 w-screen content-center'>
			<h2 className='section-title'> My Projects </h2>
			<div className='pt-12 pb-3 container grid grid-cols-1 justify-center mx-auto items-center md:flex md:justify-evenly'>
				{projects.map(({ slug, ...project }) => (
					<div
						key={slug}
						className='bg-white dark:bg-darkmode-darker pb-6 grid grid-cols-1 md:mx-5 mx-auto mb-6  
						md:max-w-md max-w-sm rounded-lg shadow-lg hover:-translate-y-1 hover:-translate-x-1 
						transform-gpu transition duration-200 overflow-hidden'
					>
						<div className='pb-2.5'>
							<a href={`/projects/${slug}`}>
								<img className=' p-0   mx-auto' src={project.image.url} alt={project.image.altName} />
							</a>
						</div>
						<div className='text-center my-3'>
							<Link
								className='hover:text-white-darker mb-5 font-semibold transition duration-200'
								to={`/projects/${slug}`}
							>
								<h3 className='text-2xl mb-5'> {project.title} </h3>
							</Link>
						</div>

						<div className='flex justify-around'>
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
					</div>
				))}
			</div>
			{/* IN DEVELOPMENT */}
			{/* <div className='flex mt-3 justify-center'>
				<button className='common-btn'> Read More </button>
			</div> */}
		</section>
	);
};

export default Projects;
