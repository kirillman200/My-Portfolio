import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "404.png" }) {
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
        <p className="section-kicker">404 · Lost in the stack</p>
        <h1 className="section-title mt-5">This page wandered off.</h1>
        <GatsbyImage
          className="mt-10 max-w-md"
          image={image}
          alt="Page not found illustration"
        />
        <Link className="common-btn mt-10" to="/">
          Back home
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <SEO title="404: Not found" pathname="/404" />
