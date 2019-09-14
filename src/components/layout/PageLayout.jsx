import React from 'react';
import styled from 'styled-components';

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

const PageLayout = styled.div.attrs(() => ({
  className: 'page-layout',
}))`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpointsUp.tablet} {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: unset;
  }
`;