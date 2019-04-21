import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';

const PostTemplate = ({ data }) => {
  const post = data.wordpressPost;

  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;
