/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.katelovero.com",
    title: "Kate Lovero",
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: "Kate Lovero",
      start_url: "/",
      background_color: `#F0F3F5`,
      display: `standalone`,
      theme_color: `#3E6257`,
      icon: `src/images/icon.png`,
    }
  },
   "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};