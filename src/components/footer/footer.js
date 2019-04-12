import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import SocialMenu from '../menus/socialmenu';
import Tags from '../tags/tags';
import SubscribeLinks from '../subscribeLinks/subscribeLinks';

export default () => {
  return (
    <footer>
      <div>
        © {new Date().getFullYear()},{` `}
        One to Grow On
      </div>
      <SocialMenu />
      <Tags />
      <SubscribeLinks />
    </footer>
  );
};
