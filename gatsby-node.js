const cmsUrl = (
  process.env.CMS_ACCESS_URL ||
  process.env.GATSBY_CMS_ACCESS ||
  ""
).trim()
const useLocalCms = !cmsUrl
const isNetlifyBuild = process.env.NETLIFY === "true"

const previewAsset = {
  altName: "Portfolio preview artwork",
  fileName: "og.jpg",
  height: 630,
  url: "/og.jpg",
  width: 1200,
}

const previewProjects = [
  {
    id: "local-portfolio-refresh",
    title: "Portfolio Refresh",
    slug: "portfolio-refresh",
    shortDescription:
      "A modern Gatsby, React, and Tailwind portfolio experience focused on clarity, performance, and thoughtful interaction.",
    description: {
      text: "A local preview project used when the external CMS is not configured.",
      markdown:
        "This local preview keeps development fully functional without production credentials. Configure CMS_ACCESS_URL to replace it with live project content.",
    },
    categories: ["Gatsby", "React", "Tailwind CSS"],
    image: previewAsset,
    frameworkImage: previewAsset,
    liveLink: "https://kmankovskyi.com",
    githubLink: "https://github.com/kirillman200/My-Portfolio",
  },
]

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  if (!useLocalCms) return

  createTypes(`
    enum LocalStage {
      PUBLISHED
      DRAFT
    }

    enum LocalDocumentFormat {
      webp
      jpg
      png
    }

    enum LocalImageFit {
      max
      clip
      crop
      scale
    }

    input LocalProjectWhereUniqueInput {
      id: ID
    }

    input LocalDocumentOutputInput {
      format: LocalDocumentFormat
    }

    input LocalDocumentTransformationInput {
      output: LocalDocumentOutputInput
    }

    input LocalImageResizeInput {
      height: Int
      width: Int
      fit: LocalImageFit
    }

    input LocalImageTransformationInput {
      resize: LocalImageResizeInput
    }

    input LocalAssetTransformationInput {
      document: LocalDocumentTransformationInput
      image: LocalImageTransformationInput
    }

    type LocalRichText @dontInfer {
      text: String!
      markdown: String!
    }

    type LocalAsset @dontInfer {
      altName: String!
      fileName: String!
      width: Int
      height: Int
      url(transformation: LocalAssetTransformationInput): String!
    }

    type LocalProject @dontInfer {
      id: ID!
      title: String!
      slug: String!
      shortDescription: String!
      description: LocalRichText!
      categories: [String!]!
      frameworkImage: LocalAsset!
      image: LocalAsset!
      liveLink: String!
      githubLink: String!
    }

    type LocalCms @dontInfer {
      projects(first: Int, stage: LocalStage): [LocalProject!]!
      project(where: LocalProjectWhereUniqueInput!): LocalProject
    }

    type Query {
      cms: LocalCms!
    }
  `)
}

exports.onPreBootstrap = ({ reporter }) => {
  if (isNetlifyBuild) {
    const emailPublicKey =
      process.env.GATSBY_EMAILJS_PUBLIC_KEY || process.env.GATSBY_USER_ID
    const missingEmailVariables = [
      ["GATSBY_SERVICE_ID", process.env.GATSBY_SERVICE_ID],
      ["GATSBY_TEMPLATE_ID", process.env.GATSBY_TEMPLATE_ID],
      ["GATSBY_EMAILJS_PUBLIC_KEY", emailPublicKey],
    ]
      .filter(([, value]) => !value?.trim())
      .map(([name]) => name)

    if (missingEmailVariables.length) {
      reporter.panicOnBuild(
        `Missing required contact environment variables: ${missingEmailVariables.join(
          ", ",
        )}`,
      )
      return
    }
  }

  if (useLocalCms) {
    reporter.info(
      "CMS_ACCESS_URL is not set; using local project preview data.",
    )
  }
}

exports.createResolvers = ({ createResolvers }) => {
  if (!useLocalCms) return

  createResolvers({
    Query: {
      cms: {
        type: "LocalCms!",
        resolve: () => ({}),
      },
    },
    LocalCms: {
      projects: {
        resolve: (_source, { first }) =>
          previewProjects.slice(0, first ?? previewProjects.length),
      },
      project: {
        resolve: (_source, { where }) =>
          previewProjects.find(project => project.id === where.id) ?? null,
      },
    },
  })
}

exports.createPages = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  const result = await graphql(`
    {
      cms {
        projects(stage: PUBLISHED) {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Unable to load projects from the CMS", result.errors)
    return
  }

  const projects = result.data?.cms?.projects ?? []

  const seenSlugs = new Set()

  projects.forEach(({ id, slug }) => {
    const normalizedSlug = typeof slug === "string" ? slug.trim() : ""

    if (!id || !normalizedSlug) {
      reporter.panicOnBuild(
        "Every published CMS project must have a non-empty id and slug.",
      )
      return
    }

    if (seenSlugs.has(normalizedSlug)) {
      reporter.panicOnBuild(
        `Duplicate published CMS project slug: ${normalizedSlug}`,
      )
      return
    }

    seenSlugs.add(normalizedSlug)
    createPage({
      path: `/projects/${normalizedSlug}`,
      component: require.resolve("./src/templates/ProjectPage.js"),
      context: { id },
    })
  })
}
