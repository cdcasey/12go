/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import PreviewLink from '../components/PreviewLink/PreviewLink';
import styles from './index.module.scss';
import SEO from '../components/SEO';
import { PostTitle } from '../components/PageStyles';

const propTypes = {
  data: PropTypes.shape({
    allWordpressPost: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }).isRequired,
};

const TagIndexPage = ({ data }) => {
  const { edges } = data.allWordpressPost;

  return (
    <Layout>
      <SEO title="Transcripts" />
      <PostTitle>Transcripts</PostTitle>
      <div className={styles.mainContainer}>
        {edges.map(({ node }) => {
          const bgUrl = node.featured_media
            ? node.featured_media.localFile?.childImageSharp.fixed.src
            : '';
          return (
            <PreviewLink
              key={node.id}
              path={node.path}
              slug={node.slug}
              title={node.title}
              date={node.date}
              excerpt={node.excerpt}
              bgUrl={bgUrl}
            />
          );
        })}
      </div>
    </Layout>
  );
};

TagIndexPage.propTypes = propTypes;

export default TagIndexPage;

export const query = graphql`
  query($category: String!) {
    allWordpressPost(
      filter: { categories: { elemMatch: { slug: { eq: $category } } } }
    ) {
      edges {
        node {
          id
          slug
          path
          title
          date(formatString: "MMMM DD, YYYY")
          excerpt
          featured_media {
            localFile {
              childImageSharp {
                fixed(width: 300, height: 200) {
                  width
                  height
                  src
                  srcSet
                }
              }
            }
          }
          categories {
            id
            name
            slug
          }
        }
      }
    }
  }
`;
