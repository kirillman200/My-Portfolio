import React, { useState } from "react"
import emailjs from "@emailjs/browser"
import { useForm } from "react-hook-form"
import { navigate } from "gatsby"
import { FiArrowUpRight, FiMail, FiMapPin } from "react-icons/fi"

const service = process.env.GATSBY_SERVICE_ID
const template = process.env.GATSBY_TEMPLATE_ID
const publicKey =
  process.env.GATSBY_EMAILJS_PUBLIC_KEY || process.env.GATSBY_USER_ID

const Contact = () => {
  const [submitError, setSubmitError] = useState("")
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  async function sendEmail(_, event) {
    setSubmitError("")

    try {
      await emailjs.sendForm(service, template, event.target, {
        publicKey,
      })
      reset()
      await navigate("/success")
    } catch (error) {
      console.error("Email submission failed", error)
      setSubmitError(
        "Something went wrong. Please email me directly and I’ll get back to you.",
      )
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32"
    >
      <div className="overflow-hidden rounded-[2.5rem] bg-ink text-white shadow-2xl">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative flex flex-col justify-between overflow-hidden p-8 sm:p-12 lg:p-16">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-coral/25 blur-3xl" />
            <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-violet/30 blur-3xl" />
            <div className="relative">
              <p className="section-kicker text-coral!">Get in touch</p>
              <h2 className="section-title mt-5">
                Have an idea? Let’s make it real.
              </h2>
              <p className="mt-7 max-w-md text-lg leading-8 text-white/65">
                Tell me a little about the problem, the people you’re building
                for, and where I can help.
              </p>
            </div>
            <div className="relative mt-16 space-y-4 text-sm font-semibold">
              <a
                className="flex items-center gap-3 text-white/80 hover:text-white"
                href="mailto:kmankovskyi@gmail.com"
              >
                <FiMail /> kmankovskyi@gmail.com
              </a>
              <p className="flex items-center gap-3 text-white/80">
                <FiMapPin /> Toronto, Canada
              </p>
            </div>
          </div>
          <form
            noValidate
            onSubmit={handleSubmit(sendEmail)}
            className="m-2 rounded-[2rem] bg-paper p-7 text-ink sm:p-10 lg:p-12"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="form-element-wrap">
                <label className="form-label" htmlFor="name">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-input"
                  placeholder="Jane Smith"
                  aria-invalid={Boolean(errors.name)}
                  {...register("name", { required: "Please enter your name." })}
                />
                {errors.name && (
                  <p className="form-error">{errors.name.message}</p>
                )}
              </div>
              <div className="form-element-wrap">
                <label className="form-label" htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="jane@company.com"
                  aria-invalid={Boolean(errors.email)}
                  {...register("email", {
                    required: "Please enter your email.",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Please enter a valid email.",
                    },
                  })}
                />
                {errors.email && (
                  <p className="form-error">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div className="form-element-wrap mt-6">
              <label className="form-label" htmlFor="subject">
                Project or subject
              </label>
              <input
                id="subject"
                type="text"
                className="form-input"
                placeholder="Website redesign"
                {...register("subject")}
              />
            </div>
            <div className="form-element-wrap mt-6">
              <label className="form-label" htmlFor="message">
                Tell me about it
              </label>
              <textarea
                className="form-input"
                id="message"
                rows="5"
                placeholder="A few details about your project, goals, and timeline…"
                aria-invalid={Boolean(errors.message)}
                {...register("message", {
                  required: "Please add a short message.",
                })}
              />
              {errors.message && (
                <p className="form-error">{errors.message.message}</p>
              )}
            </div>
            {submitError && (
              <p className="form-error mt-5" role="alert">
                {submitError}
              </p>
            )}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="common-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending…" : "Send message"} <FiArrowUpRight />
              </button>
              <p className="text-xs text-ink/55">
                I usually reply within two business days.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
