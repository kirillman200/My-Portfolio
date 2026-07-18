import React from "react"
import { FaLinkedinIn } from "react-icons/fa"
import { FiGithub, FiMail } from "react-icons/fi"
const Footer = () => {
  return (
    <footer className="border-t border-black/10 px-6 py-10 dark:border-white/10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 md:flex-row">
        <div>
          <p className="font-display text-lg font-semibold">Kiril Mankovskyi</p>
          <p className="mt-1 text-sm text-ink/55">
            Designed and built with care · &copy; {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            className="social-links-footer"
            href="https://github.com/kirillman200"
            target="_blank"
            aria-label="GitHub"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
          <a
            className="social-links-footer"
            href="https://www.linkedin.com/in/kiril-mankovskyi/"
            target="_blank"
            aria-label="LinkedIn"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="social-links-footer"
            href="mailto:kmankovskyi@gmail.com"
            target="_blank"
            aria-label="Mail"
            rel="noreferrer"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
