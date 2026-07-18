import React from "react"
import { Link } from "gatsby"
import { Link as LinkS } from "react-scroll"

// import ThemeToggle from './ThemeToggle';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <nav
      id="mobile-navigation"
      className={
        isOpen
          ? "surface-card fixed left-4 right-4 top-24 z-40 grid rounded-3xl p-3 text-center md:hidden"
          : "hidden"
      }
      onClick={toggle}
      aria-label="Mobile navigation"
    >
      <Link className="links-item justify-center" to="/">
        {" "}
        Home{" "}
      </Link>
      <LinkS
        className="links-item justify-center"
        to="about"
        smooth={true}
        duration={500}
        spy={true}
        exact={true}
        offset={-320}
      >
        {" "}
        About{" "}
      </LinkS>
      <LinkS
        className="links-item justify-center"
        to="projects"
        smooth={true}
        duration={500}
        spy={true}
        exact={true}
        offset={-320}
      >
        {" "}
        Projects{" "}
      </LinkS>
      <LinkS
        className="links-item justify-center"
        to="contact"
        smooth={true}
        duration={500}
        spy={true}
        exact={true}
        offset={-81}
      >
        {" "}
        Contact{" "}
      </LinkS>
      {/* <div className='block links-item mx-auto my-auto'>
				<ThemeToggle />
			</div> */}
    </nav>
  )
}

export default Dropdown
