import React from "react"
import { Link as LinkS } from "react-scroll"
import { GatsbyImage } from "gatsby-plugin-image"
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi"

const Hero = ({
  Title,
  SubTitle,
  ScrollTo,
  Image,
  ProjectImage,
  FallbackAltForImg,
}) => {
  return (
    <section
      id="hero"
      className="mx-auto max-w-7xl px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="max-w-3xl">
          <div className="eyebrow-pill mb-7">
            {ProjectImage
              ? "Selected project"
              : "Available for new opportunities"}
          </div>
          <h1 className="font-display text-[clamp(3.6rem,9vw,7.8rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
            {Title}
          </h1>
          <h2 className="gradient-text mt-6 font-display text-[clamp(2rem,5vw,4.6rem)] font-semibold leading-none tracking-[-0.06em]">
            {SubTitle || "Built with intention."}
          </h2>
          {!ProjectImage && (
            <>
              <p className="section-copy mt-8 max-w-2xl">
                I create thoughtful digital experiences where clean engineering
                meets expressive design.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <LinkS
                  className="common-btn"
                  to="projects"
                  smooth
                  duration={500}
                  offset={-70}
                >
                  Explore my work <FiArrowDown />
                </LinkS>
                <a
                  className="common-btn secondary"
                  href="mailto:kmankovskyi@gmail.com"
                >
                  Start a conversation <FiArrowUpRight />
                </a>
              </div>
            </>
          )}
        </div>
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-5 -z-10 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-coral/35 to-violet/35 blur-sm" />
          <div className="surface-card overflow-hidden rounded-[2rem] p-3">
            {Image ? (
              <GatsbyImage
                className="rounded-[1.35rem]"
                image={Image}
                alt="Developer working at a computer"
              />
            ) : (
              <img
                className="aspect-[4/3] w-full rounded-[1.35rem] object-cover"
                src={ProjectImage}
                alt={FallbackAltForImg}
              />
            )}
          </div>
          <div className="surface-card absolute -bottom-5 -left-5 rounded-2xl px-5 py-3 font-display text-sm font-semibold">
            Design · Build · Iterate
          </div>
        </div>
      </div>
      {ProjectImage && (
        <LinkS
          className="mx-auto mt-14 flex w-max cursor-pointer items-center gap-2 text-sm font-bold"
          to={ScrollTo}
          smooth
          duration={500}
          offset={-80}
        >
          Project details <FiArrowDown />
        </LinkS>
      )}
    </section>
  )
}

export default Hero
