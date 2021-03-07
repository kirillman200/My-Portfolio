/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// const { graphql } = require("gatsby");

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions: { createPage } }) => {
	const { data: { cms: { projects } } } = await graphql(`
    {

        cms {
			projects (stage: PUBLISHED){
				id
				slug
				
				
			}
		}
    }
    
    `);

	projects.forEach(({ id, slug }) =>
		createPage({
			path: `/projects/${slug}`,
			component: require.resolve(`./src/templates/ProjectPage.js`),
			context: {
				id
			}
		})
	);
};
