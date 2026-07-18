const cmsPlugin = process.env.GATSBY_CMS_ACCESS
  ? {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GraphCMS`,
        fieldName: `cms`,
        url: process.env.GATSBY_CMS_ACCESS,
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
    image: "/og.png",
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
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/projects/*`],
      },
    },
  ],
}
