import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from './Layout';
import Sidebar from '../Sidebar/Sidebar';
import { breakpointsUp } from '../../constants/breakpoints';

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default function UnstyledPageLayout({ children }) {
  return (
    <Layout>
      <PageLayout>
        <div>{children}</div>
        <Sidebar />
      </PageLayout>
    </Layout>
  );
}

UnstyledPageLayout.propTypes = propTypes;

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
