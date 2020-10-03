import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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
    horticulturati: file(relativePath: { eq: "collabs/horticulturati.png" }) {
      ...squareImage
    }

    planthropology: file(relativePath: { eq: "collabs/planthropology.jpg" }) {
      ...squareImage
    }

    spirits: file(relativePath: { eq: "collabs/spirits.png" }) {
      ...squareImage
    }
  }
`;

const IMAGE_INFO = {
  horticulturati: {
    alt: 'Horticulturati logo',
  },
  planthropology: {
    alt: 'Planthropology logo',
  },
  spirits: {
    alt: 'Spirits logo',
  },
};

const propTypes = {
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const Image = ({ image, className }) => (
  <StaticQuery
    query={query}
    render={(data) => {
      return (
        <figure>
          <Img
            fluid={data[`${image}`].childImageSharp.fluid}
            alt={IMAGE_INFO[image].alt}
            className={className}
          />
        </figure>
      );
    }}
  />
);

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;