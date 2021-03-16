import React from 'react';
import { Link } from 'gatsby';
// import ThemeToggle from './ThemeToggle';

const Dropdown = ({ isOpen, toggle }) => {
	return (
		<nav
			className={
				isOpen ? (
					'bg-white dark:bg-darkmode-darker shadow-sm fixed text-xl top-20 z-20 left-0 right-0 text-center items-center'
				) : (
					'hidden'
				)
			}
			onClick={toggle}
			role='nav'
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
			{/* <div className='block links-item mx-auto my-auto'>
				<ThemeToggle />
			</div> */}
		</nav>
	);
};

export default Dropdown;
