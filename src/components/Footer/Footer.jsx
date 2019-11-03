import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { colors } from '../../constants/colors';
import Tags from '../Tags/Tags';
import FooterImage from './FooterImage';
import IconContainer from '../Icons/IconContainer';
import { breakpointsDown } from '../../constants/breakpoints';

export default props => {
  return (
    <Footer>
      <FooterItem>
        <Tags />
      </FooterItem>

      <FooterItem>
        <Link to="/">
          <MyFooterImage />
        </Link>
        <div style={{ textAlign: 'center' }}>
          © {new Date().getFullYear()},{` `}
          One to Grow On
        </div>
      </FooterItem>

      <FooterItem>
        <IconContainer />
      </FooterItem>
    </Footer>
  );
};

const Footer = styled.footer.attrs(() => ({
  className: 'footer1',
}))`
  display: flex;
  padding: 10px;
  margin-bottom: 10px;
  align-items: center;
  color: ${colors.white};
  background-color: ${colors.greenMedium};

  a,
  a:link,
  a:visited {
    color: ${colors.white};
    text-decoration: none;
  }

  a:hover {
    color: ${colors.greenDark};
    background-color: ${colors.greenLight};
  }

  ${breakpointsDown.tablet} {
    flex-direction: column;
    row-gap: 3rem;
    width: 100%;
  }
`;

const FooterItem = styled.div.attrs(() => ({
  className: 'footer__item',
}))`
  flex: 1;

  ${breakpointsDown.tablet} {
    flex: unset;
    width: 100%;
  }
`;

const MyFooterImage = styled(FooterImage).attrs(() => ({
  className: 'footer__logo',
}))`
  width: 75%;
  margin: auto;

  ${breakpointsDown.tablet} {
    max-width: 325px;
  }
`;
