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

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "sidebar/01.jpg" }) {
      ...squareImage
    }

    image2: file(relativePath: { eq: "sidebar/02.jpg" }) {
      ...squareImage
    }

    image3: file(relativePath: { eq: "sidebar/03.jpg" }) {
      ...squareImage
    }

    image4: file(relativePath: { eq: "sidebar/04.jpg" }) {
      ...squareImage
    }

    image5: file(relativePath: { eq: "sidebar/05.jpg" }) {
      ...squareImage
    }

    image6: file(relativePath: { eq: "sidebar/06.jpg" }) {
      ...squareImage
    }

    image7: file(relativePath: { eq: "sidebar/07.jpg" }) {
      ...squareImage
    }
  }
`;

const IMAGE_INFO = {
  1: {
    alt: 'Chris with headphones on getting ready to record',
    caption: 'Chris getting ready to record.',
  },
  2: {
    alt: 'Hallie and Catherine smiling at the camera while on a hike',
    caption: 'Hallie and Catherine on a hike.',
  },
  3: {
    alt:
      'Hallie, Chris, and Catherine smiling at the camera and celebrating one year of podcasting',
    caption: 'Hallie, Chris, and Catherine celebrating one year of podcasting!',
  },
  4: {
    alt:
      "Hallie and Catherine smiling at the camera while at the farmer's market",
    caption: "Hallie and Catherine at the farmer's market.",
  },
  5: {
    alt: 'Chris and Hallie smiling at the camera while on a hike',
    caption: 'Chris and Hallie on a hike.',
  },
  6: {
    alt:
      'Catherine and Hallie smiling at the camera in front of a sign that says Life is Peachy',
    caption: 'Catherine and Hallie at the Fredericksburg Farm Stand.',
  },
  7: {
    alt: 'Hallie and Chris smiling at the camera while at lunch together',
    caption: 'Hallie and Chris at lunch together.',
  },
};

const Image = ({ imageNumber, className }) => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <StyledFigure>
            <Img
              fluid={data[`image${imageNumber}`].childImageSharp.fluid}
              alt={IMAGE_INFO[imageNumber].alt}
              className={className}
            />
            <StyledCaption>{IMAGE_INFO[imageNumber].caption}</StyledCaption>
          </StyledFigure>
        );
      }}
    />
  );
};

export default Image;

// Sometimes the caption ends up on top of the figure. Maybe this helps?
const StyledFigure = styled.figure`
  display: flex;
  flex-direction: column;

  ${breakpointsDown.tablet} {
    display: none;
  }
`;

const StyledCaption = styled.figcaption`
  text-align: left;
  width: 100%;
  font-style: italic;
  font-size: 1.5rem;
`;
