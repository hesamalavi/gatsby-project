module.exports = {
  siteMetadata: {
    title: "Hesam Alavi",
    author: "Hesam Alavi",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
  ],
}
