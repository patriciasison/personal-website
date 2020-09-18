/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Patricia Sison`,
    siteUrl: `https://patriciasison.me`,
    description: `Patricia Sison's personal website`,
  },
  plugins: [
    `gatsby-plugin-force-trailing-slashes`,
    `gatsby-plugin-nprogress`,
    `gatsby-plugin-styled-components`,
  ],
}
