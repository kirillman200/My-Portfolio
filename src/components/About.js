import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ResumeDark.png" }) {
        childImageSharp {
          gatsbyImageData(formats: [WEBP, AVIF], placeholder: DOMINANT_COLOR)
        }
      }
    }
  `)

  const image = getImage(data.file)
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32"
    >
      <div className="surface-card grid overflow-hidden rounded-[2.5rem] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[24rem] overflow-hidden bg-ink p-8 lg:min-h-[42rem]">
          <div className="absolute inset-0 bg-gradient-to-br from-coral/20 to-violet/30" />
          <div className="relative mx-auto max-w-md overflow-hidden rounded-[1.8rem]">
            <GatsbyImage image={image} alt="Kiril Mankovskyi resume preview" />
          </div>
          <p className="absolute bottom-8 left-8 font-display text-xl font-semibold text-white">
            Curious by default.
          </p>
        </div>
        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
          <p className="section-kicker">About me</p>
          <h2 className="section-title mt-5">
            Crafting useful things for the web.
          </h2>
          <div className="section-copy mt-8 max-w-xl space-y-5">
            <p>
              I’m passionate about learning new platforms and programming
              languages, then turning that knowledge into polished, dependable
              products.
            </p>
            <p>
              I work comfortably on my own or with a collaborative team,
              bringing equal care to the experience people see and the systems
              underneath it.
            </p>
          </div>
          <div className="mt-9 flex flex-wrap gap-2">
            {[
              "Product thinking",
              "Front-end craft",
              "Clean systems",
              "Teamwork",
            ].map(skill => (
              <span
                key={skill}
                className="rounded-full border border-black/10 px-4 py-2 text-sm font-semibold dark:border-white/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
