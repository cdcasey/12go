import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import HeaderImage from './headerImage';
import styles from './header.module.scss';

const Header = ({ siteTitle, description }) => (
  <header className={styles.header}>
    <Link to="/">
      <h1 className={styles.heading}>{siteTitle}</h1>
      <h2 className={styles.subheading}>{description}</h2>
    </Link>
    <HeaderImage />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
