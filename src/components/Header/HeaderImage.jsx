import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { breakpointsDown } from '../../constants/breakpoints';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "12GO_YTHeader.png" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <StyledImg
        fluid={data.placeholderImage.childImageSharp.fluid}
        isHome={typeof window !== 'undefined' ? window.location.pathname === '/' : false}
      />
    )}
  />
);

export default Image;

const StyledImg = styled(Img)`
  height: ${(props) => (props.isHome ? 450 : 200)}px;

  ${breakpointsDown.laptop} {
    height: ${(props) => (props.isHome ? 350 : 200)}px;
  }

  ${breakpointsDown.tablet} {
    height: 200px;
  }
`;
