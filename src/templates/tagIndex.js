import React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import styles from './index.module.scss';

const TagIndexPage = ({ data }) => {
  const { edges } = data.allWordpressPost;

  return (
    <Layout>
      <div className={styles.mainContainer}>
        {edges.map(({ node }) => (
          <div
            key={node.slug}
            className={'post'}
            style={{ marginBottom: 50 }}
            className={styles.previewContainer}
          >
            <Link to={node.path}>
              <h3 dangerouslySetInnerHTML={{ __html: node.title }} />
            </Link>

            {node.date}
          </div>
        ))}
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
