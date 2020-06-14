/* eslint-disable */
import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout/Layout';
import Image from '../components/Image';
import SEO from '../components/SEO';

const IndexPage = ({ data }) => {
  console.log('DATA', data);
  const { edges } = data.allWordpressPost;

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi 12go people!!!</h1>
      {edges.map((edge) => {
        const { node } = edge;
        return (
          <div key={node.id}>
            <hr />

            <Link to={node.path}>
              <h2 dangerouslySetInnerHTML={{ __html: node.title }} />
            </Link>

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

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
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
        }
      }
    }
  }
`;

export default IndexPage;
