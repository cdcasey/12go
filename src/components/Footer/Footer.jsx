import React from 'react';

import SocialMenu from '../Menus/SocialMenu';
import Tags from '../tags/tags';
import SubscribeLinks from '../subscribeLinks/subscribeLinks';
import FooterImage from './FooterImage';
import styles from './footer.module.scss';

export default () => {
  return (
    <footer>
      <div className={styles.footer1}>
        <div className={styles.footer1__item}>
          <Tags />
        </div>

        <div className={styles.footer1__item}>
          <FooterImage className={styles.footer1__logo} />
          <div style={{ textAlign: 'center' }}>
            © {new Date().getFullYear()},{` `}
            One to Grow On
          </div>
        </div>

        <div className={styles.footer1__item}>
          <SocialMenu />
        </div>
      </div>
      <SubscribeLinks />
    </footer>
  );
};
