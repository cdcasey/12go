/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../header';
import MainMenu from '../menus/mainmenu';
import styles from './layout.module.scss';
import SEO from '../seo';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        wordpressSiteMetadata {
          name
          description
        }
      }
    `}
    render={data => (
      <>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <ul>
          <MainMenu />
        </ul>

        <Header
          siteTitle={data.wordpressSiteMetadata.name}
          description={data.wordpressSiteMetadata.description}
        />

        <div className={styles.container}>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()},{` `}
            One to Grow On
          </footer>
        </div>
      </>
    )}
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
