import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';

const pageQuery = graphql`
	{
		cms {
			projects {
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
					url
				}
				image {
					altName
					fileName
					url
				}
			}
		}
	}
`;

const Projects = () => {
	const { cms: { projects } } = useStaticQuery(pageQuery);
	return (
		<section id='projects' className='text-black m-0 py-16 w-screen content-center'>
			<h2 className='section-title'> My Projects </h2>
			<div className='pt-12 pb-3 container grid grid-cols-1 justify-center mx-auto items-center md:flex md:justify-evenly'>
				{projects.map(({ slug, ...project }) => (
					<div key={slug} className='grid grid-cols-1 md:mx-5 mx-auto mb-6 max-w-xs'>
						<div className='bg-white rounded-lg shadow-lg hover:-translate-y-1 hover:-translate-x-1 transform-gpu transition duration-200'>
							<a href={`/projects/${slug}`}>
								<img
									className='object-cover p-0 md:p-4  w-96 max-h-32   mx-auto'
									src={project.frameworkImage.url}
									alt={project.image.altName}
								/>
							</a>
						</div>
						<div className='text-center my-3'>
							<Link
								className='hover:text-red-lighter mb-5 transition duration-200'
								to={`/projects/${slug}`}
							>
								<h3 className='text-xl mb-5'> {project.title} </h3>
							</Link>

							{/* <div className=' flex justify-center'>
								{project.categories.map((category, key) => (
									<p className='p-1 mx-1 border border-red-lighter w-1/2 rounded-xl' key={key}>
										{' '}
										{category}{' '}
									</p>
								))}
							</div> */}
						</div>
					</div>
				))}
			</div>
			<div className='flex justify-center'>
				<button className='px-8 py-2 bg-white-darker text-blue-light hover:bg-blue-light hover:text-white-darker transition-all duration-300 rounded-lg'>
					{' '}
					Read More{' '}
				</button>
			</div>
		</section>
	);
};

export default Projects;
