import React from 'react';
import styled from '@emotion/styled';

import Layout from './Layout';
import Sidebar from '../Sidebar/Sidebar';
import { breakpointsUp } from '../../constants/breakpoints';

export default ({ children }) => (
  <Layout>
    <PageLayout>
      <div>{children}</div>
      <Sidebar />
    </PageLayout>
  </Layout>
);

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpointsUp.tablet} {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: unset;
  }
`;
