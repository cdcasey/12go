import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import PreviewLink from '../components/PreviewLink/PreviewLink';
import styles from './index.module.scss';

const TagIndexPage = ({ data }) => {
  const { edges } = data.allWordpressPost;

  return (
    <Layout>
      <div className={styles.mainContainer}>
        {edges.map(({ node }) => {
          const bgUrl = node.featured_media
            ? node.featured_media.localFile.childImageSharp.fixed.src
            : '';
          return (
            <PreviewLink
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
export default TagIndexPage;

export const query = graphql`
  query($tag: String) {
    allWordpressPost(filter: { tags: { elemMatch: { slug: { eq: $tag } } } }) {
      edges {
        node {
          id
          slug
          path
          title
          date(formatString: "MMMM DD, YYYY")
          excerpt
          tags {
            id
            slug
            link
          }
        }
      }
    }
  }
`;
