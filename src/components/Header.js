import React from "react"
import { Link } from "gatsby"
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi"

const Header = ({ toggle, isOpen }) => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className="surface-card mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full px-4 md:px-6"
        aria-label="Primary navigation"
      >
        <Link
          to="/"
          className="flex items-center gap-3 font-display font-bold tracking-tight"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-sm text-paper">
            KM
          </span>
          <span className="hidden sm:inline">Kiril Mankovskyi</span>
        </Link>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full md:hidden"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        <div className="hidden items-center gap-1 md:flex">
          <Link to="/" className="links-item">
            Home
          </Link>
          <Link className="links-item" to="/#about">
            About
          </Link>
          <Link className="links-item" to="/#projects">
            Projects
          </Link>
          <Link className="links-item" to="/#contact">
            Contact
          </Link>
          <a
            className="common-btn ml-2 min-h-11! px-4!"
            href="mailto:kmankovskyi@gmail.com"
          >
            Let's talk <FiArrowUpRight />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
