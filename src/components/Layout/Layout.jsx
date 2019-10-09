/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import SEO from '../SEO';
import Header from '../Header/Header';
import MainMenu from '../Menus/MainMenu';
import Search from '../Search/Search';
import Footer from '../Footer/Footer';

const layoutQuery = graphql`
  query SiteTitleQuery {
    wordpressSiteMetadata {
      name
      description
    }
  }
`;

function LayoutComponent(data, children) {
  return (
    <React.Fragment>
      <SEO
        title="One to Grow On"
        keywords={[
          `agriculture`,
          `science`,
          `podcast`,
          'green new deal',
          'aoc',
          'biodiesel',
          'farming',
          'food',
          'superfoods',
          'agriculture podcast',
          'farming podcast',
          'food podcast',
          'plant science',
          'gardening',
          'gardening podcast',
          'bugs',
          'pollenators',
        ]}
      />
      <MainMenuContainer>
        <MainMenu />
        <Search />
      </MainMenuContainer>

      <Header
        siteTitle={data.wordpressSiteMetadata.name}
        description={data.wordpressSiteMetadata.description}
      />

      <LayoutContainer>{children}</LayoutContainer>

      <Footer />
    </React.Fragment>
  );
}

const Layout = ({ children }) => (
  <StaticQuery
    query={layoutQuery}
    render={data => LayoutComponent(data, children)}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

// query={graphql`
// query SiteTitleQuery {
//   site {
//     siteMetadata {
//       title
//     }
//   }
// }
// `}

const LayoutContainer = styled.main.attrs(() => ({
  className: 'layout-container',
}))`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const MainMenuContainer = styled.div.attrs(() => ({
  className: 'mainmenu-container',
}))`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;
