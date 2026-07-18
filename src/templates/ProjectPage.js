import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import { FiGithub, FiExternalLink } from "react-icons/fi"

const ProjectPage = ({
  data: {
    cms: { project },
  },
}) => (
  <>
    <Layout>
      <Hero
        Title={project.title}
        SubTitle=""
        ScrollTo={project.slug}
        ProjectImage={project.image.url}
        FallbackAltForImg={project.image.altName}
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
                {project.description.markdown}
              </div>
            </div>
            <div className="lg:border-l lg:border-black/10 lg:pl-10 dark:lg:border-white/10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/55">
                Project links
              </p>
              <div className="mt-5 flex gap-3">
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
              </div>
              <p className="mt-9 text-xs font-bold uppercase tracking-[0.16em] text-ink/55">
                Built with
              </p>
              <img
                className="mt-5 w-full rounded-2xl border border-black/10 dark:border-white/10"
                src={project.frameworkImage.url}
                alt={project.frameworkImage.altName}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  </>
)

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

export const Head = ({
  data: {
    cms: { project },
  },
}) => (
  <SEO
    title={project.title}
    description={project.shortDescription}
    ImageDimensions={project.image}
    image={project.image.url}
    pathname={`/projects/${project.slug}`}
  />
)
