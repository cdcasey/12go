/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import SEO from '../SEO'
import Header from '../Header/Header'
import MainMenu from '../Menus/MainMenu'
import Search from '../Search/Search'
import Footer from '../Footer/Footer'
import { breakpointsDown } from '../../constants/breakpoints'
import GlobaloStyles from '../../styles/globalStyles'

const layoutQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`

function LayoutComponent(data, children) {
  // eslint-disable-next-line react/destructuring-assignment
  const { title, subtitle } = data.site.siteMetadata

  return (
    <React.Fragment>
      <GlobaloStyles />
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

      <Header siteTitle={title} subtitle={subtitle} />

      <LayoutContainer>{children}</LayoutContainer>

      <Footer />
    </React.Fragment>
  )
}

const Layout = ({ children }) => (
  <StaticQuery query={layoutQuery} render={(data) => LayoutComponent(data, children)} />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

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

  ${breakpointsDown.laptop} {
    margin: 0 1rem;
  }
`

const MainMenuContainer = styled.div.attrs(() => ({
  className: 'mainmenu-container',
}))`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`
