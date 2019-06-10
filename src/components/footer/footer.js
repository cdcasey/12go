import React from 'react';

import SocialMenu from '../menus/socialmenu';
import Tags from '../tags/tags';
import SubscribeLinks from '../subscribeLinks/subscribeLinks';
import FooterImage from './footerImage';
import styles from './footer.module.scss';

export default () => {
  return (
    <footer>
      <div className={styles.footer1}>
        <Tags />
        <div>
          <FooterImage />
          <div style={{ flex: 1, textAlign: 'center' }}>
            © {new Date().getFullYear()},{` `}
            One to Grow On
          </div>
        </div>
        <SocialMenu />
      </div>
      <SubscribeLinks />
    </footer>
  );
};
