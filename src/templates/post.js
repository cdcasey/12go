/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import PageLayout from '../components/Layout/PageLayout';
import styles from './post.module.scss';

const propTypes = {
  data: PropTypes.shape({
    wordpressPost: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      date: PropTypes.string,
    }),
  }).isRequired,
};

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

PostTemplate.propTypes = propTypes;

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
