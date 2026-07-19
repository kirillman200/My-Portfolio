const cmsUrl = (
  process.env.CMS_ACCESS_URL ||
  process.env.GATSBY_CMS_ACCESS ||
  ""
).trim()
const isNetlifyBuild = process.env.NETLIFY === "true"

if (isNetlifyBuild && !cmsUrl) {
  throw new Error(
    "CMS_ACCESS_URL is required for Netlify builds. Refusing to publish local preview content.",
  )
}

if (cmsUrl) {
  const parsedCmsUrl = new URL(cmsUrl)

  if (!["http:", "https:"].includes(parsedCmsUrl.protocol)) {
    throw new Error("CMS_ACCESS_URL must use http or https.")
  }

  if (isNetlifyBuild && parsedCmsUrl.protocol !== "https:") {
    throw new Error("CMS_ACCESS_URL must use https in Netlify builds.")
  }
}

const cmsPlugin = cmsUrl
  ? {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GraphCMS`,
        fieldName: `cms`,
        url: cmsUrl,
      },
    }
  : null

module.exports = {
  trailingSlash: "never",
  siteMetadata: {
    title: `Kiril Mankovskyi - Developer & Digital Product Builder`,
    description: `Developer creating thoughtful digital experiences where clean engineering meets expressive design.`,
    author: `Kiril Mankovskyi`,
    url: "https://kmankovskyi.com",
    siteUrl: `https://kmankovskyi.com`,
    image: "/og.jpg",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-K942XKW",
        includeInDevelopment: false,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-postcss",

    ...(cmsPlugin ? [cmsPlugin] : []),

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My-Portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#F7F5F2`,
        theme_color: `#101321`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
