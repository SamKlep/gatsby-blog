module.exports = {
  siteMetadata: {
    title: `Samuel's Blog`,
    description: `A personal blog to document web development learning and progress.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    "gatsby-transformer-remark",
  ],
}

module.exports = {
  siteMetadata: {
    title: `</Sam's Blog>`,
    description: `A personal blog to document web development learning and progress.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    "gatsby-transformer-remark",
  ],
}
