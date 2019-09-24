import React from 'react';
import styled from 'styled-components';

import { colors } from '../../constants/colors';
import Tags from '../Tags/Tags';
import FooterImage from './FooterImage';
import IconContainer from '../Icons/IconContainer';

export default props => {
  console.log('PROPS', props);

  return (
    <Footer>
      <FooterItem>
        <Tags />
      </FooterItem>

      <FooterItem>
        <MyFooterImage />
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
`;

const FooterItem = styled.div.attrs(() => ({
  className: 'footer__item',
}))`
  flex: 1;
`;

const MyFooterImage = styled(FooterImage).attrs(() => ({
  className: 'footer__logo',
}))`
  width: 50%;
  margin: auto;
`;
