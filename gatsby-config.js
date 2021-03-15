require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});
module.exports = {
	siteMetadata: {
		title: `Portfolio - Kiril Mankovskyi`,
		description: `Hi, This is about me`,
		author: `@kirilmankovskyi`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		'gatsby-plugin-postcss',
		'gatsby-plugin-dark-mode',

		{
			resolve: `gatsby-source-graphql`,
			options: {
				typeName: `GraphCMS`,
				fieldName: `cms`,
				url: process.env.GATSBY_CMS_ACCESS,
				downloadLocalImages: true
			}
		},

		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `My-Portfolio`,
				short_name: `portfolio`,
				start_url: `/`,
				background_color: `#000`,
				theme_color: `#96031A`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
