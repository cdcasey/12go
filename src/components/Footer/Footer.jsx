import React from 'react';
import styled from 'styled-components';

import Tags from '../Tags/Tags';
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
          <IconContainer>
            <IconLabel>Listen Now:</IconLabel>
            <IconGroup>
              <Android />
              <ApplePodcasts />
              <Stitcher />
              <Spotify />
              <RSS />
            </IconGroup>
          </IconContainer>
          <IconContainer>
            <IconLabel>Connect:</IconLabel>
            <IconGroup>
              <Instagram />
              <Twitter />
              <Facebook />
              <Envelope />
              <Patreon />
            </IconGroup>
          </IconContainer>
        </div>
      </div>
    </footer>
  );
};

const IconContainer = styled.div`
  margin-top: 1rem;
  display: flex;
`;

const IconLabel = styled.div`
  font-family: 'Lilita One';
  font-size: 2.5rem;
  text-align: right;
  flex: 1;
`;

const IconGroup = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-evenly;
`;
