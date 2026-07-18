import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"
import Dropdown from "./Dropdown"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(open => !open)

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", hideMenu)

    return () => {
      window.removeEventListener("resize", hideMenu)
    }
  }, [isOpen])

  return (
    <div className="page-shell antialiased">
      <Header toggle={toggle} isOpen={isOpen} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <main className="page-main">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
