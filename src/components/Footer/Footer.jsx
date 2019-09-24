import React from 'react';
import styled from 'styled-components';

import Tags from '../Tags/Tags';
import FooterImage from './FooterImage';
import styles from './footer.module.scss';
import IconContainer from '../Icons/IconContainer';

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
          <IconContainer />
        </div>
      </div>
    </footer>
  );
};
