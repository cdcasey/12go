import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import styles from './post.module.scss';

const PostTemplate = ({ data }) => {
  const post = data.wordpressPost;

  return (
    <Layout>
      <h1
        className={styles.postTitle}
        dangerouslySetInnerHTML={{ __html: post.title }}
      />
      <div dangerouslySetInnerHTML={{ __html: post.date.split('T')[0] }} />
      <div
        className={styles.postContent}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      date
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;
