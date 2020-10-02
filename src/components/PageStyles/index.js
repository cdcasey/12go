import styled from 'styled-components';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { colors } from '../../constants/colors';

export const PostContent = styled.div.attrs(() => ({
  className: 'post-content',
}))`
  margin-top: 0.3rem;
  font-size: 1.7rem;

  p {
    margin-bottom: 1rem;
  }

  figure {
    float: left;
    margin: 5px 20px 5px 0;

    img {
      /* height: 300px; */
      width: 250px;
    }

    figcaption {
      font-style: italic;
    }
  }
`;

export const SectionTitle = styled.h2.attrs(() => ({
  className: 'section-title',
}))`
  margin-top: 4rem;
  font-size: 3rem;
  font-weight: normal;
`;

export const PostTitle = styled.h1.attrs(() => ({
  className: 'post-title',
}))`
  font-size: 4rem;
`;

export const Clear = styled.div`
  clear: both;
`;

export const SiteLink = styled(Link).attrs(() => ({
  className: '12goLink',
}))`
  &:link,
  &:visited {
    text-decoration: none;
    color: ${colors.purpleDark};
  }

  &:hover {
    color: ${colors.orangeLight};
  }
`;

export const ExternalLink = styled(OutboundLink)`
  &,
  &:link,
  &:visited {
    text-decoration: none;
    color: ${colors.purpleDark};
  }
  &:hover {
    background-color: ${colors.greenLight};
    background-color: unset;
  }
`;
