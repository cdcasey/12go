import React from 'react';
import { graphql } from 'gatsby';

import PageLayout from '../components/Layout/PageLayout';
import styles from './post.module.scss';

const PostTemplate = ({ data }) => {
  const post = data.wordpressPost;

  return (
    <PageLayout>
      <h1
        className={styles.postTitle}
        dangerouslySetInnerHTML={{ __html: post.title }}
      />
      <div dangerouslySetInnerHTML={{ __html: post.date.split('T')[0] }} />
      <div
        className={styles.postContent}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </PageLayout>
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
