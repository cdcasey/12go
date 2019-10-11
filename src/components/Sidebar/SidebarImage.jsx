import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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

    image5: file(relativePath: { eq: "sidebar/05.png" }) {
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

const ALT_TAGS = {
  1: 'Chris with headphones on getting ready to record',
  2: 'Hallie and Catherine smiling at the camera while on a hike',
  3: 'Hallie, Chris, and Catherine smiling at the camera and celebrating one year of podcasting',
  4: "Hallie and Catherine smiling at the camera while at the farmer's market",
  5: 'Chris and Hallie  smiling at the camera while on a hike',
  6: 'Catherine and Hallie smiling at the camera in front of a sign that says Life is Peachy',
  7: 'Hallie and Chris smiling at the camera while at lunch together',
};

const Image = ({ imageNumber, className }) => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Img
            fluid={data[`image${imageNumber}`].childImageSharp.fluid}
            alt={ALT_TAGS[imageNumber]}
            className={className}
          />
        );
      }}
    />
  );
};

export default Image;
