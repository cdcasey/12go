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

const pageQuery = `
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
}
`;

const postsQuery = `
{
  allWordpressPost {
    edges {
      node {
        id
        slug
        path
        status
        template
        format
      }
    }
  }
}
`;

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    // Pages
    graphql(pageQuery)
      .then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const pageTemplate = path.resolve('./src/templates/page.js');

        _.each(result.data.allWordpressPage.edges, edge => {
          createPage({
            path: `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: {
              id: edge.node.id,
            },
          });
        });
      })

      .then(() => {
        graphql(postsQuery).then(result => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }
          const postTemplate = path.resolve('./src/templates/post.js');
          const postsTemplate = path.resolve('./src/templates/posts.js');

          // Create Posts
          createPage({
            path: `/posts/`,
            component: slash(postsTemplate),
          });

          _.each(result.data.allWordpressPost.edges, edge => {
            createPage({
              path: `${edge.node.path}`,
              component: slash(postTemplate),
              context: {
                id: edge.node.id,
              },
            });
          });
          resolve();
        });
      });
    // ==== END POSTS ====
  });
};
