const path = require('path');

module.exports = {
  siteMetadata: {
    title: "Ventsislav Dimitrov",
    titleTemplate: "Ventsislav Dimitrov - %s",
    url: "http://www.ventsi.net",
    image: "/images/snape.jpg", // It isn't in use
    description: "Ventsislav Dimitrov is an experienced web developer who can help you with tailored solutions for your software needed",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, 'src', 'images'),
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: path.join('src', 'images', 'favicon.png'),
      },
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pagesData`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Helvetica'],
        }
      }
    },
  ]
}
