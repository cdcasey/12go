import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  console.log('DATA', data);
  const { edges } = data.allWordpressPost;

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi 12go people!!!</h1>
      {edges.map(edge => {
        const { node } = edge;
        return (
          <div key={node.id}>
            <hr />
            <p>
              <Link to={node.path}>
                <strong dangerouslySetInnerHTML={{ __html: node.title }} />
              </Link>
            </p>
            <p>{node.date}</p>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        );
      })}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          id
          title
          excerpt
          date(formatString: "MMMM DD, YYYY")
          author {
            name
          }
          path
          tags {
            id
            name
          }
          slug
          content
        }
      }
    }
  }
`;

export default IndexPage;
