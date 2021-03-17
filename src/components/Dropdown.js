import React from 'react';
import { Link } from 'gatsby';
import { Link as LinkS } from 'react-scroll';

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
			<LinkS
				className='block  links-item '
				to='about'
				smooth={true}
				duration={500}
				spy={true}
				exact='true'
				offset={-320}
			>
				{' '}
				About{' '}
			</LinkS>
			<LinkS
				className='block  links-item '
				to='projects'
				smooth={true}
				duration={500}
				spy={true}
				exact='true'
				offset={-320}
			>
				{' '}
				Projects{' '}
			</LinkS>
			<LinkS
				className='block links-item '
				to='contact'
				smooth={true}
				duration={500}
				spy={true}
				exact='true'
				offset={-81}
			>
				{' '}
				Contact{' '}
			</LinkS>
			{/* <div className='block links-item mx-auto my-auto'>
				<ThemeToggle />
			</div> */}
		</nav>
	);
};

export default Dropdown;
