import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import SocialMenu from '../menus/socialmenu';
import Tags from '../tags/tags';

export default () => {
  return (
    <footer>
      © {new Date().getFullYear()},{` `}
      One to Grow On
      <SocialMenu />
      <Tags />
    </footer>
  );
};
