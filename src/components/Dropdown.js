import React from 'react';
import { Link } from 'gatsby';

const Dropdown = ({ isOpen, toggle }) => {
	return (
		<div
			className={
				isOpen ? (
					'bg-white shadow-sm fixed text-xl top-20 z-20 left-0 right-0 text-center items-center   '
				) : (
					'hidden'
				)
			}
			onClick={toggle}
		>
			<Link className='block  links-item ' to='/'>
				{' '}
				Home{' '}
			</Link>
			<Link className='block  links-item ' to='/'>
				{' '}
				About{' '}
			</Link>
			<Link className='block  links-item ' to='/'>
				{' '}
				Projects{' '}
			</Link>
			<Link className='block links-item ' to='/'>
				{' '}
				Contact{' '}
			</Link>
		</div>
	);
};

export default Dropdown;
