/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import './src/sass/main.scss';

import React from 'react';

import { SearchProvider } from './src/components/Search/SearchProvider';

export const wrapRootElement = ({ element }) => (
  <SearchProvider>{element}</SearchProvider>
);
