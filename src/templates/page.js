import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';

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
