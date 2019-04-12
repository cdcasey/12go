/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);
const createPaginatedPages = require('gatsby-paginate');

const queryAll = `
  {
    allWordpressPage {
      edges {
        node {
          id
          slug
          status
          template
        }
      }
    }

    allWordpressPost {
      edges {
        node {
          id
          slug
          path
          status
          template
          format
          title
          date(formatString: "MMMM DD, YYYY")
          excerpt
        }
      }
    }
  }
`;

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve('./src/templates/page.js');
    const postTemplate = path.resolve('./src/templates/post.js');
    const postsTemplate = path.resolve('./src/templates/posts.js');

    resolve(
      graphql(queryAll).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Pages
        const pages = result.data.allWordpressPage.edges;

        _.each(result.data.allWordpressPage.edges, edge => {
          createPage({
            path: `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: {
              id: edge.node.id,
            },
          });
        });

        // Individual post pages
        const posts = result.data.allWordpressPost.edges;

        _.each(result.data.allWordpressPost.edges, edge => {
          createPage({
            path: `${edge.node.path}`,
            component: slash(postTemplate),
            context: {
              id: edge.node.id,
            },
          });
        });

        createPaginatedPages({
          edges: posts,
          createPage: createPage,
          pageTemplate: 'src/templates/index.js',
          pageLength: 6,
          pathPrefix: 'page',
          buildPath: (index, pathPrefix) =>
            index > 1 ? `${pathPrefix}/${index}` : `/`, // This is optional and this is the default
        });
      })
    );
  });
};
