module.exports = {
  siteMetadata: {
    title: `Kate Lovero`,
    description: `Dr. Kate Lovero is Assistant Professor in the Department of Psychiatry at Columbia University Vagelos College of Physicians and Surgeons.`,
    author: `@lizlove`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#F0F3F5`,
        theme_color: `#3E6257`,
        display: `minimal-ui`,
        icon: `src/images/klo-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
