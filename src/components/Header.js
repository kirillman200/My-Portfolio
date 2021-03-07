import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { animateScroll as scroll, Link as LinkS } from 'react-scroll';
const Header = ({ siteTitle, toggle, isOpen }) => {
	const [ scrollNav, setScrollNav ] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<header className='fixed shadow-sm text-lg w-screen h-20 z-50 bg-white text-black '>
			<NavBar
				scrollNav={scrollNav}
				className='flex p-0 px-6 justify-between h-20 items-center font-bold relative transition duration-700 '
				role='navigation'
			>
				<div className='site-name-wrap'>
					<h1 className=' pl-8'>
						<a onClick={toggleHome} className='cursor-pointer'>
							Kiril Mankovskyi
						</a>
					</h1>
				</div>
				<div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
					{!isOpen ? (
						<svg
							className='cursor-pointer hover:text-red transition duration-300 ease-in-out items-center w-8 h-8'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M4 6h16M4 12h16m-7 6h7'
							/>
						</svg>
					) : (
						<svg
							className='cursor-pointer hover:text-red transition duration-300 ease-in-out items-center w-8 h-8'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					)}
				</div>

				<div className='pr-8  md:block hidden'>
					<NavLinks
						to='hero'
						smooth={true}
						duration={500}
						spy={true}
						exact='true'
						offset={-85}
						className='links-item'
					>
						{' '}
						Home{' '}
					</NavLinks>
					<NavLinks
						className='links-item'
						to='about'
						smooth={true}
						duration={500}
						spy={true}
						exact='true'
						offset={-81}
					>
						{' '}
						About{' '}
					</NavLinks>
					<NavLinks
						className='links-item'
						to='projects'
						smooth={true}
						duration={500}
						spy={true}
						exact='true'
						offset={-75}
					>
						{' '}
						Projects{' '}
					</NavLinks>
					<NavLinks
						className='links-item'
						to='contact'
						smooth={true}
						duration={500}
						spy={true}
						exact='true'
						offset={-75}
					>
						{' '}
						Contact{' '}
					</NavLinks>
				</div>
			</NavBar>
		</header>
	);
};

export const NavBar = styled.nav`background: ${({ scrollNav }) => (scrollNav ? '#fff' : 'transparent')};`;
export const NavLinks = styled(LinkS)`
  &.active{
	  border-bottom: 3px solid #FFCDCD
  }
`;

export default Header;
