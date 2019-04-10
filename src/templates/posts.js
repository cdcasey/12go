import React, { Component } from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

class PostsTemplate extends Component {
  render() {
    const { edges } = this.props.data.allWordpressPost;

    return (
      <div>
        <h1>Posts</h1>

        {edges.map(({ node }) => (
          <div key={node.slug} className={'post'} style={{ marginBottom: 50 }}>
            <Link to={node.path}>
              <h3>{node.title}</h3>
            </Link>

            <div
              className={'post-content'}
              dangerouslySetInnerHTML={{ __html: node.excerpt }}
            />

            {node.date}
          </div>
        ))}
      </div>
    );
  }
}

PostsTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
};

export default PostsTemplate;

export const pageQuery = graphql`
  query postsQuery {
    allWordpressPost {
      edges {
        node {
          id
          title
          excerpt
          slug
          path
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`;
