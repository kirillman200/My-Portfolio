/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import './src/styles/global.css';

export const onClientEntry = () => {
	document.getElementById('___gatsby').style.display = 'block';
	setTimeout(function(){
		document.getElementById('___loader').classList.add('pre-loader-done');
		setTimeout(function(){
			document.getElementById('___loader').style.display = 'none';
		}, 500);
	}, 1000);
};
