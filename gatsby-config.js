require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});
module.exports = {
	siteMetadata: {
		title: `Portfolio - Kiril Mankovskyi`,
		description: `This Is My Porfolio, Please Check It Out!. I am proficient in various platforms and languages. Experienced with the latest cutting-edge development tools and procedures. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team. `,
		author: `Kiril Mankovskyi`,
		url: 'https://kmankovskyi.com',
		siteUrl: `https://kmankovskyi.com`,
		image: './src/images/ResumeDark.png'
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-google-tagmanager',
			options: {
				id: 'GTM-K942XKW',
				includeInDevelopment: false
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-plugin-sitemap`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		'gatsby-plugin-postcss',

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
				background_color: `#fff`,
				theme_color: `#FFCDCD`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-plugin-offline`,
			options: {
				precachePages: [ `/`, `/projects/*` ]
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
