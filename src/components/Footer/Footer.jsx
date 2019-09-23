import React from 'react';

import SocialMenu from '../Menus/SocialMenu';
import Tags from '../Tags/Tags';
import SubscribeLinks from '../SubscribeLinks/SubscribeLinks';
import FooterImage from './FooterImage';
import styles from './footer.module.scss';
import Patreon from '../Icons/Patreon';
import Envelope from '../Icons/Envelope';
import Facebook from '../Icons/Facebook';
import Twitter from '../Icons/Twitter';
import Instagram from '../Icons/Instagram';
import Android from '../Icons/Android';
import ApplePodcasts from '../Icons/ApplePodcasts';
import Stitcher from '../Icons/Stitcher';
import Spotify from '../Icons/Spotify';
import RSS from '../Icons/RSS';

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
          <Patreon />
          <Envelope />
          <Facebook />
          <Twitter />
          <Instagram />
          <Android />
          <ApplePodcasts />
          <Stitcher />
          <Spotify />
          <RSS />
        </div>
      </div>
      <SubscribeLinks />
    </footer>
  );
};
