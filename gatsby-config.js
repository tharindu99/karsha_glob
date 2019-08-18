const prism = require('@mapbox/rehype-prism')
const smartypants = require('./src/utils/remark-smartypants')
module.exports = {
  siteMetadata: {
    title: 'Karsha',
    author: 'Tharindu Peiris',
    description:
      'Karsha data visualization',
    siteUrl: 'https://karsha.umiacs.umd.edu',
  },
  pathPrefix: '/gatsby-starter-blog',
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: {
        root: __dirname,
        extensions: ['.md', '.mdx'],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            pluginOptions: {
              maxWidth: 590,
              sizeByPixelDensity: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
        mdPlugins: [smartypants],
        hastPlugins: [prism]
      },
    },
    `gatsby-plugin-netlify`,
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-brotli',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Karsha`,
        short_name: `Karsha`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `minimal-ui`,
        icon: `static/favico.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/components/assets/card-img`,
        name: 'cardImages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/components/assets/post-img`,
        name: 'postImages',
      },
    },
  ],
}
