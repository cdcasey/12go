/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';

const propTypes = {
  data: PropTypes.shape({
    wordpressPage: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }),
  }).isRequired,
};

const PageTemplate = ({ data }) => {
  // const siteMetadata = this.props.data.site.siteMetadata;

  const currentPage = data.wordpressPage;

  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
      <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />

      {/* <p dangerouslySetInnerHTML={{ __html: currentPage.date }} />
        <p dangerouslySetInnerHTML={{ __html: currentPage.slug }} /> */}
    </Layout>
  );
};

PageTemplate.propTypes = propTypes;

export default PageTemplate;

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      slug
      id
      date(formatString: "MMMM DD, YYYY")
    }
    site {
      id
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;
