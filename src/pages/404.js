import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';
import { colors } from '../constants/colors';
import { breakpointsDown } from '../constants/breakpoints';
import { PostContent } from '../components/PageStyles';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Styled404Header>404 Error</Styled404Header>
    <CenteredPostContent>
      A disaster. We can’t find that page.
      <br />
      It might be an old link, or it might have moved!
    </CenteredPostContent>
  </Layout>
);

export default NotFoundPage;

const Styled404Header = styled.h1`
  margin-top: 10rem;
  font-family: 'Lilita One', cursive;
  font-weight: normal;
  font-size: 7rem;
  color: ${colors.purpleDark};
  letter-spacing: 0.2rem;
  text-align: center;

  ${breakpointsDown.tablet} {
    font-size: 4rem;
  }
`;

const CenteredPostContent = styled(PostContent)`
  text-align: center;
`;
