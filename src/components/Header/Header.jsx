import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import HeaderImage from './HeaderImage';
import { colors } from '../../constants/colors';
import { breakpointsDown } from '../../constants/breakpoints';

const HeaderComponent = ({ siteTitle, description }) => (
  <Header>
    <Link to="/">
      <Heading>{siteTitle}</Heading>
      <Subheading>{description}</Subheading>
    </Link>
    <HeaderImage />
  </Header>
);

HeaderComponent.propTypes = {
  siteTitle: PropTypes.string,
};

HeaderComponent.defaultProps = {
  siteTitle: ``,
};

export default HeaderComponent;

const Header = styled.header`
  /* background: $color-purple-dark; */
  margin-bottom: 1.45rem;
  text-align: center;
  position: relative;

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
    &:hover {
      color: ${colors.orangeLight};
    }

    ${breakpointsDown.tablet} {
      box-shadow: 0px 0px 60px 70px ${colors.white};
    }
  }
`;

const Heading = styled.h1`
  font-family: 'Lilita One', cursive;
  font-size: 6.7vw;
  letter-spacing: 0.2rem;
`;

const Subheading = styled.h2`
  font-size: 2rem;
`;
