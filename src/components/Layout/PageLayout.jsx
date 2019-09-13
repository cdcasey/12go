import React from 'react';
import styled from 'styled-components';

import Layout from './Layout';
import Sidebar from '../Sidebar/Sidebar';

export default ({ children }) => (
  <Layout>
    <PageLayout>
      {children}
      <Sidebar />
    </PageLayout>
  </Layout>
);

const PageLayout = styled.div.attrs(() => ({
  className: 'page-layout',
}))`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;
