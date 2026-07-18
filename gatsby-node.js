const useLocalCms = !process.env.GATSBY_CMS_ACCESS

const previewAsset = {
  altName: "Portfolio preview artwork",
  fileName: "og.png",
  height: 909,
  url: "/og.png",
  width: 1728,
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
        "This local preview keeps development fully functional without production credentials. Configure GATSBY_CMS_ACCESS to replace it with live project content.",
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
  if (useLocalCms) {
    reporter.info(
      "GATSBY_CMS_ACCESS is not set; using local project preview data.",
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

  projects.forEach(({ id, slug }) => {
    createPage({
      path: `/projects/${slug}`,
      component: require.resolve("./src/templates/ProjectPage.js"),
      context: { id },
    })
  })
}
