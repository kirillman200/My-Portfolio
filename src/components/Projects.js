import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { FiGithub, FiExternalLink } from "react-icons/fi"

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
`

const Projects = () => {
  const {
    cms: { projects },
  } = useStaticQuery(pageQuery)
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32"
    >
      <div className="grid gap-6 md:grid-cols-[0.72fr_1.28fr] md:items-end">
        <div>
          <p className="section-kicker">Selected work</p>
          <h2 className="section-title mt-5">Projects with purpose.</h2>
        </div>
        <p className="section-copy max-w-2xl md:justify-self-end">
          A small selection of products shaped through thoughtful design,
          maintainable code, and plenty of iteration.
        </p>
      </div>
      <div className="mt-14 grid gap-7 md:grid-cols-2">
        {projects.map(({ slug, ...project }) => (
          <article
            key={slug}
            className="surface-card group overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-2"
          >
            <Link className="block overflow-hidden" to={`/projects/${slug}`}>
              <img
                className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                src={project.image.url}
                alt={project.image.altName}
              />
            </Link>
            <div className="p-7 sm:p-8">
              <div className="mb-5 flex flex-wrap gap-2">
                {project.categories?.slice(0, 3).map(category => (
                  <span
                    key={category}
                    className="rounded-full bg-violet/10 px-3 py-1 text-xs font-bold text-violet"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <Link to={`/projects/${slug}`}>
                <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] transition group-hover:text-violet">
                  {project.title}
                </h3>
              </Link>
              <p className="section-copy mt-4 text-base!">
                {project.shortDescription}
              </p>
              <div className="mt-7 flex items-center gap-3">
                <a
                  className="social-links-footer"
                  href={project.githubLink}
                  target="_blank"
                  aria-label="GitHub"
                  rel="noreferrer"
                >
                  <FiGithub />
                </a>
                <a
                  className="social-links-footer"
                  href={project.liveLink}
                  target="_blank"
                  aria-label="Live"
                  rel="noreferrer"
                >
                  <FiExternalLink />
                </a>
                <Link
                  className="ml-auto text-sm font-bold text-violet"
                  to={`/projects/${slug}`}
                >
                  View case study →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
