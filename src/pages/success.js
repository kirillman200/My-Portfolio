import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const Success = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Submission.png" }) {
        childImageSharp {
          gatsbyImageData(formats: [WEBP, AVIF], placeholder: DOMINANT_COLOR)
        }
      }
    }
  `)
  const image = getImage(data.file)
  return (
    <Layout>
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 pb-20 pt-32 text-center">
        <p className="section-kicker">Message sent</p>
        <h1 className="section-title mt-5">Thanks for reaching out.</h1>
        <p className="section-copy mt-5">
          Your note is on its way. I’ll get back to you soon.
        </p>
        <GatsbyImage
          className="mt-10 max-w-md"
          image={image}
          alt="Successful message submission"
        />
        <Link className="common-btn mt-10" to="/">
          Back home
        </Link>
      </div>
    </Layout>
  )
}

export default Success

export const Head = () => <SEO title="Message sent" pathname="/success" />
