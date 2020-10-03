import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useLocation } from '@reach/router';

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

const Image = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
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
        <StyledImg fluid={data.placeholderImage.childImageSharp.fluid} needsBigHeader={isHome} />
      )}
    />
  );
};

export default Image;

const StyledImg = styled(Img)`
  height: ${(props) => (props.needsBigHeader ? 450 : 200)}px;

  ${breakpointsDown.laptop} {
    height: ${(props) => (props.needsBigHeader ? 350 : 200)}px;
  }

  ${breakpointsDown.tablet} {
    height: 200px;
  }
`;
