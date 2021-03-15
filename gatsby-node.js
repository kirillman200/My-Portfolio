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
