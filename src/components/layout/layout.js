/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import SEO from '../seo';
import Header from '../header';
import MainMenu from '../menus/mainmenu';
import Search from '../search/search';
import Footer from '../footer/footer';
import styles from './layout.module.scss';

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
        title="Home"
        keywords={[
          `agriculture`,
          `science`,
          `podcast`,
          'green new deal',
          'aoc',
          'biodiesel',
          'farming',
          'food',
        ]}
      />
      <div className={styles.mainMenuContainer}>
        <MainMenu />
        <Search />
      </div>

      <Header
        siteTitle={data.wordpressSiteMetadata.name}
        description={data.wordpressSiteMetadata.description}
      />

      <div className={styles.container}>
        <main>{children}</main>
        <Footer />
      </div>
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
