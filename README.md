# Kiril Mankovskyi Portfolio

A Gatsby 5, React 19, and Tailwind CSS 4 portfolio backed by Hygraph and deployed on Netlify.

## Local development

```powershell
npm install
npm start
```

Without CMS credentials, local development uses a clearly labelled preview project.

To test live content, copy `.env.example` to `.env.development` and set:

- `CMS_ACCESS_URL`: Hygraph GraphQL content endpoint.
- `GATSBY_SERVICE_ID`: EmailJS service identifier.
- `GATSBY_TEMPLATE_ID`: EmailJS template identifier.
- `GATSBY_EMAILJS_PUBLIC_KEY`: EmailJS public key.

## Validation

```powershell
npm test
```

This checks formatting and performs a full production build.

## Netlify

Netlify builds require the CMS and EmailJS variables above. Missing production configuration fails the build instead of publishing placeholder content or a broken contact form.

The repository uses `gatsby-adapter-netlify`; do not enable the legacy `netlify-plugin-gatsby-cache`, `@netlify/plugin-sitemap`, or Lighthouse build plugins in the Netlify UI. Gatsby already generates the sitemap, and performance audits should run independently from deployment.
