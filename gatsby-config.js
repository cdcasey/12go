require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { GATSBY_API_URL, GATSBY_API_ENDPOINT, GATSBY_SITE_URL } = process.env

const config = {
  siteMetadata: {
    title: `On to Grow On`,
    subtitle: `Understanding how food production impacts ourselves and our world`,
    description: `One to Grow On is a podcast where we dig into questions about agriculture and try to understand how food production impacts us and our world.`,
    author: `@onetogrowonpod, Hallie Casey, Chris Casey`,
    url: `https://www.onetogrowonpod.com`,
    twitterUsername: `@onetogrowonpod`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/lettuce.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // baseUrl: GATSBY_API_URL,
        // protocol: GATSBY_API_PROTOCOL,
        url: `${GATSBY_API_URL}/${GATSBY_API_ENDPOINT}`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false,
        // conert links in source posts to links for the deployed site
        // searchAndReplaceContentUrls: {
        //   sourceUrl: `${GATSBY_API_URL}`,
        //   replacementUrl: `${GATSBY_SITE_URL}`,
        // },
        searchAndReplace: [
          {
            search: `${GATSBY_API_URL}`,
            replace: `${GATSBY_SITE_URL}`,
          },
        ],
        // includedRoutes: [
        //   '**/posts',
        //   '**/pages',
        //   '**/users',
        //   '**/tags',
        //   '**/menus',
        //   '**/media',
        //   '**/categories',
        // ],
        verboseOutput: true,
      },
    },
    'gatsby-plugin-twitter',
    'gatsby-plugin-styled-components',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

if (process.env.CONTEXT === 'production') {
  const googleAnalyticsConfig = {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-150285970-1',
      anonymize: true,
      head: true,
    },
  }
  config.plugins.push(googleAnalyticsConfig)
}

module.exports = config
