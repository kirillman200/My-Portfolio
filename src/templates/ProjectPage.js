import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import { toSafeExternalUrl } from "../utils/safeUrl"

const fallbackImage = "/og.jpg"

const ProjectPage = ({ data }) => {
  const project = data?.cms?.project

  if (!project) {
    return (
      <Layout>
        <section className="mx-auto max-w-3xl px-6 pb-28 pt-40 text-center md:px-10">
          <p className="section-kicker">Project unavailable</p>
          <h1 className="section-title mt-5">
            This case study is not ready yet.
          </h1>
          <p className="section-copy mx-auto mt-6">
            The project may still be publishing. Please check back shortly.
          </p>
        </section>
      </Layout>
    )
  }

  const projectImage = project.image?.url || fallbackImage
  const projectImageAlt =
    project.image?.altName || `${project.title} project preview`
  const description =
    project.description?.markdown ||
    project.shortDescription ||
    "More details about this project are coming soon."
  const githubUrl = toSafeExternalUrl(project.githubLink)
  const liveUrl = toSafeExternalUrl(project.liveLink)
  const hasProjectLinks = githubUrl || liveUrl

  return (
    <Layout>
      <Hero
        Title={project.title}
        SubTitle=""
        ScrollTo={project.slug}
        ProjectImage={projectImage}
        FallbackAltForImg={projectImageAlt}
      />
      <section
        id={project.slug}
        className="mx-auto max-w-6xl px-6 pb-28 md:px-10 md:pb-36"
      >
        <div className="surface-card rounded-[2.5rem] p-8 sm:p-12 lg:p-16">
          <p className="section-kicker">Case study</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_0.38fr]">
            <div>
              <h2 className="section-title">The project in detail.</h2>
              <div className="section-copy mt-8 whitespace-pre-line">
                {description}
              </div>
            </div>
            <div className="lg:border-l lg:border-black/10 lg:pl-10 dark:lg:border-white/10">
              {hasProjectLinks && (
                <>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/55">
                    Project links
                  </p>
                  <div className="mt-5 flex gap-3">
                    {githubUrl && (
                      <a
                        className="social-links-footer"
                        href={githubUrl}
                        target="_blank"
                        aria-label={`View ${project.title} on GitHub`}
                        rel="noreferrer"
                      >
                        <FiGithub />
                      </a>
                    )}
                    {liveUrl && (
                      <a
                        className="social-links-footer"
                        href={liveUrl}
                        target="_blank"
                        aria-label={`Visit the live ${project.title} project`}
                        rel="noreferrer"
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </>
              )}
              <p className="mt-9 text-xs font-bold uppercase tracking-[0.16em] text-ink/55">
                Built with
              </p>
              {project.categories?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.categories.map(category => (
                    <span
                      key={category}
                      className="rounded-full bg-violet/10 px-3 py-1 text-xs font-bold text-violet"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}
              {project.frameworkImage?.url && (
                <img
                  className="mt-5 w-full rounded-2xl border border-black/10 dark:border-white/10"
                  src={project.frameworkImage.url}
                  alt={
                    project.frameworkImage.altName ||
                    `${project.title} technology stack`
                  }
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectPageQuery($id: ID!) {
    cms {
      project(where: { id: $id }) {
        title
        slug
        shortDescription
        description {
          markdown
        }
        categories
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
          width
          height
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

export default ProjectPage

export const Head = ({ data }) => {
  const project = data?.cms?.project

  return (
    <SEO
      title={project?.title || "Project"}
      description={
        project?.shortDescription || "A selected project by Kiril Mankovskyi."
      }
      ImageDimensions={project?.image}
      image={project?.image?.url || fallbackImage}
      pathname={project?.slug ? `/projects/${project.slug}` : "/projects"}
    />
  )
}
