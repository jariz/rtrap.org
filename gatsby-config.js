require('dotenv/config');
const URL = require('url-parse');

const publicUrl = new URL(process.env.GATSBY_PUBLIC_URL);

const gqlOptions = {
    typeName: 'Craft',
    fieldName: 'craft',
    url: process.env.GATSBY_GRAPHQL_URL,
    headers: {
        Authorization: `bearer ${process.env.GATSBY_GRAPHQL_TOKEN}`
    }
};

module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `r/trap essential list`,
                short_name: `trap essentials`,
                start_url: `/`,
                background_color: `#283364`,
                theme_color: `#4285f4`,
                display: `minimal-ui`,
                icon: `src/images/icon.svg` // This path is relative to the root of the site.
            }
        },
        {
            resolve: 'gatsby-source-graphql',
            options: gqlOptions,
        },
        'gatsby-plugin-typescript',
        'gatsby-plugin-styled-components'
    ]
};
