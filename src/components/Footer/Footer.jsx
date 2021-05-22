import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { colors } from '../../constants/colors'
import spacing from '../../constants/spacing'
import Tags from '../Tags/Tags'
import FooterImage from './FooterImage'
import IconContainer from '../Icons/IconContainer'
import { breakpointsDown } from '../../constants/breakpoints'

export default () => (
  <Footer>
    <FooterTagsArea>
      <Tags />
    </FooterTagsArea>

    <FooterImageArea>
      <Link to="/">
        <MyFooterImage />
      </Link>
      <div style={{ textAlign: 'center' }}>
        © {new Date().getFullYear()},{` `}
        One to Grow On
      </div>
    </FooterImageArea>

    <FooterIconsArea>
      <IconContainer />
    </FooterIconsArea>
  </Footer>
)

const Footer = styled.footer.attrs(() => ({
  className: 'footer1',
}))`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'tags image icons';
  padding: ${spacing(1)};
  align-items: center;
  color: ${colors.white};
  background-color: ${colors.greenMedium};

  ${breakpointsDown.tablet} {
    grid-template-columns: 1fr;
    /* grid-template-rows: 1fr 1fr 1fr; */
    grid-row-gap: 16px;
    grid-template-areas:
      'tags'
      'icons'
      'image';
    /* flex-direction: column; */
    /* row-gap: ${spacing(3)}; */
    /* width: 100%; */
  }
`

const FooterTagsArea = styled.div`
  grid-area: tags;
`

const FooterImageArea = styled.div`
  grid-area: image;
`

const FooterIconsArea = styled.div`
  grid-area: icons;
`
// const FooterItem = styled.div.attrs(() => ({
//   className: 'footer__item',
// }))`
//   flex: 1;

//   ${breakpointsDown.tablet} {
//     flex: unset;
//     width: 100%;
//   }
// `;

const MyFooterImage = styled(FooterImage).attrs(() => ({
  className: 'footer__logo',
}))`
  width: 75%;
  margin: auto;

  ${breakpointsDown.tablet} {
    max-width: 325px;
  }
`
