import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { colors } from '../../constants/colors';

export const PostContent = styled.div`
  margin-top: 2rem;
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

export const SectionTitle = styled.h2`
  margin-top: 4rem;
  font-size: 3rem;
  font-style: italic;
`;

export const PostTitle = styled.h1`
  font-size: 4rem;
  font-style: italic;
`;

export const Clear = styled.div`
  clear: both;
`;

export const SiteLink = styled(Link)`
  &:link,
  &:visited {
    text-decoration: none;
    color: ${colors.purpleDark};
  }

  &:hover {
    color: ${colors.orangeLight};
  }
`;
