import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/Projects"
import Hero from "../components/Hero"
import About from "../components/About"
import Contact from "../components/Contact"

import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Programmer.png" }) {
        childImageSharp {
          gatsbyImageData(
            formats: [WEBP, PNG, AVIF]
            placeholder: DOMINANT_COLOR
          )
        }
      }
    }
  `)
  const image = getImage(data.file)

  return (
    <Layout>
      <Hero
        Title="Kiril Mankovskyi"
        SubTitle="Developer & builder."
        ScrollTo="about"
        Image={image}
      />
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <SEO
    title="Developer & Digital Product Builder"
    ImageDimensions={{ width: 1200, height: 630 }}
    image="/og.jpg"
    pathname="/"
  />
)
