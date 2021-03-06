import React from 'react';
import PropTypes from 'prop-types';
import LoaderSVG from './images/tail-spin.svg';

export default function HTML(props){
	return (
		<html {...props.htmlAttributes}>
			<head>
				<meta charSet='utf-8' />
				<meta httpEquiv='x-ua-compatible' content='ie=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
				{props.headComponents}
			</head>
			<body {...props.bodyAttributes}>
				{props.preBodyComponents}

				<div
					key={`loader`}
					id='___loader'
					style={{
						alignItems: 'center',
						display: 'flex',
						justifyContent: 'center',
						position: 'fixed',
						left: 0,
						top: 0,
						right: 0,
						bottom: 0,
						height: '100vh',
						width: '100vw',
						overflow: 'hidden',
						zIndex: 100
					}}
					className='translate-x-full bg-white dark:bg-darkmode overflow-x-hidden overflow-y-hidden'
				>
					<img src={LoaderSVG} className='mx-auto my-auto' alt='loading spinner' width='150' height='150' />
				</div>
				<div key={`body`} id='___gatsby' dangerouslySetInnerHTML={{ __html: props.body }} />
				{props.postBodyComponents}
			</body>
		</html>
	);
}

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array
};
