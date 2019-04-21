import React from 'react';

import SocialMenu from '../menus/socialmenu';
import Tags from '../tags/tags';
import SubscribeLinks from '../subscribeLinks/subscribeLinks';
import styles from './footer.module.scss';

export default () => {
  return (
    <footer>
      <div className={styles.footer1}>
        <Tags />
        <div style={{ flex: 1 }}>
          © {new Date().getFullYear()},{` `}
          One to Grow On
        </div>
        <SocialMenu />
      </div>
      <SubscribeLinks />
    </footer>
  );
};
