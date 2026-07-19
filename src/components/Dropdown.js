import React from "react"
import { Link } from "gatsby"

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
      <Link className="links-item justify-center" to="/#about">
        About
      </Link>
      <Link className="links-item justify-center" to="/#projects">
        Projects
      </Link>
      <Link className="links-item justify-center" to="/#contact">
        Contact
      </Link>
      {/* <div className='block links-item mx-auto my-auto'>
				<ThemeToggle />
			</div> */}
    </nav>
  )
}

export default Dropdown
