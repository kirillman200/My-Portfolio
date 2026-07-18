import React from "react"
import PropTypes from "prop-types"

const site = {
  description:
    "Kiril Mankovskyi is a developer creating thoughtful digital experiences where clean engineering meets expressive design.",
  title: "Kiril Mankovskyi",
  url: "https://kmankovskyi.com",
}

function SEO({
  description = site.description,
  ImageDimensions: dimensions,
  image = "/og.png",
  keywords = ["Kiril Mankovskyi", "Portfolio", "Web Developer", "Developer"],
  lang = "en",
  meta = [],
  pathname = "/",
  title,
}) {
  const canonical = new URL(pathname, site.url).href
  const metaImage = new URL(image, site.url).href
  const pageTitle = `${title} | ${site.title}`

  return (
    <>
      <html lang={lang} />
      <title>{pageTitle}</title>
      <link rel="canonical" href={canonical} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={metaImage} />
      {dimensions?.width && (
        <meta property="og:image:width" content={dimensions.width} />
      )}
      {dimensions?.height && (
        <meta property="og:image:height" content={dimensions.height} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />
      {meta.map((attributes, index) => (
        <meta
          key={`${attributes.name || attributes.property}-${index}`}
          {...attributes}
        />
      ))}
    </>
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  ImageDimensions: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  image: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  pathname: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO
