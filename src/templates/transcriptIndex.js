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
          return (
            <PreviewLink
              key={node.id}
              path={node.path}
              slug={node.slug}
              title={node.title}
              date={node.date}
              excerpt={node.excerpt}
            />
          );
        })}
      </div>
    </Layout>
  );
};
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
