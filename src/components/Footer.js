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
          <a
            className="preferred-source-button"
            href="https://www.google.com/preferences/source?q=kmankovskyi.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Add as preferred source on Google: Kiril Mankovskyi (opens in a new tab)"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              aria-hidden="true"
              focusable="false"
            >
              <path d="m12 3 2.8 5.7 6.3.9-4.5 4.4 1.1 6.2-5.7-3-5.7 3 1.1-6.2L3.2 9.6l6-.9L12 3Z" />
            </svg>
            <span className="preferred-source-copy">
              <strong>Add as preferred source</strong>
              <small>on Google</small>
            </span>
          </a>
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
