/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

/**
 * SAVE FOR LATER
 *
 *     allWordpressPage {
      edges {
        node {
          id
          slug
          status
          template
        }
      }
    }

 */

const queryAll = `
 {
    allWordpressPost {
      edges {
        node {
          id
          slug
        }
      }
    }

    allWordpressTag {
      edges {
        node {
          id
          count
          name
          link
          slug
        }
      }
    }

  }
`

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    // const pageTemplate = path.resolve('./src/templates/page.js');
    const postTemplate = path.resolve('./src/templates/post.js')
    const tagTemplate = path.resolve('./src/templates/tagIndex.js')
    const transcriptTemplate = path.resolve('./src/templates/transcriptIndex.js')

    resolve(
      graphql(queryAll).then((result) => {
        if (result.errors) {
          // eslint-disable-next-line no-console
          console.error(result.errors)
          reject(result.errors)
        }

        // Pages
        // const pages = result.data.allWordpressPage.edges;

        // _.each(result.data.allWordpressPage.edges, edge => {
        //   if (edge.node.slug !== 'about') {
        //     createPage({
        //       path: `/${edge.node.slug}/`,
        //       component: slash(pageTemplate),
        //       context: {
        //         id: edge.node.id,
        //       },
        //     });
        //   }
        // });

        // pages.forEach(edge => {
        //   if (
        //     edge.node.slug !== 'about' ||
        //     edge.node.slug !== 'contact' ||
        //     edge.node.slug !== 'press'
        //   ) {
        //     createPage({
        //       path: `/${edge.node.slug}/`,
        //       component: slash(pageTemplate),
        //       context: {
        //         id: edge.node.id,
        //       },
        //     });
        //   }
        // });

        // Individual post pages
        // const posts = result.data.allWordpressPost.edges;
        const { edges } = result.data.allWordpressPost

        edges.forEach((edge) => {
          createPage({
            path: `${edge.node.slug}`,
            component: slash(postTemplate),
            context: {
              id: edge.node.id,
              category: 'episodes',
            },
          })
        })

        // Tags
        const tagEdges = result.data.allWordpressTag.edges

        tagEdges.forEach((edge) => {
          createPage({
            path: `tag/${edge.node.slug}`,
            component: slash(tagTemplate),
            context: {
              tag: edge.node.slug,
            },
          })
        })

        // THIS COULD REALLY BE SOMETHING IN /pages WITH A PAGE QUERY
        // Transcripts
        edges.forEach(() => {
          createPage({
            path: `transcripts/`,
            component: slash(transcriptTemplate),
            context: {
              category: 'transcripts',
            },
          })
        })
      }),
    )
  })
}
