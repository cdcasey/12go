import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
// A Gatsby dep. May change to react-router in the future
// eslint-disable-next-line import/no-unresolved
import { useLocation } from '@reach/router'

import HeaderImage from './HeaderImage'
import { colors } from '../../constants/colors'
import { breakpointsDown } from '../../constants/breakpoints'
import { defaultHover } from '../../constants/animations'

const HeaderComponent = ({ siteTitle, subtitle }) => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <Header>
      <Link to="/">
        {isHome ? (
          <HomeHeading>{siteTitle}</HomeHeading>
        ) : (
          <NonHomeHeading>{siteTitle}</NonHomeHeading>
        )}
        <Subheading>{subtitle}</Subheading>
      </Link>
      <HeaderImage isHome={isHome} />
    </Header>
  )
}

HeaderComponent.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default HeaderComponent

const Header = styled.header`
  margin-bottom: 5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 0;

  & a,
  a:link,
  a:visited {
    color: ${colors.purpleDark};
    text-decoration: none;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 100px 90px ${colors.white};
    background-color: ${colors.white};
    z-index: 100;
    width: 80%;
    transition-duration: ${defaultHover};

    &:hover {
      color: ${colors.orangeLight};
      transition-duration: ${defaultHover};
    }

    ${breakpointsDown.tablet} {
      box-shadow: 0px 0px 60px 40px ${colors.white};
    }
  }
`

const HeadingStyles = css`
  font-family: 'Lilita One', cursive;
  font-size: min(6.7vw, 144px);
  letter-spacing: 0.2rem;

  ${breakpointsDown.mobileL} {
    font-size: 3.6rem;
  }
`

const HomeHeading = styled.h1`
  ${HeadingStyles}
`

const NonHomeHeading = styled.h2`
  ${HeadingStyles}
`

const Subheading = styled.p`
  font-size: 2rem;
  font-weight: bold;

  ${breakpointsDown.tablet} {
    font-size: 1.8rem;
  }
`
