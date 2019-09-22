import React from 'react';
import Link from 'gatsby-link';

import styles from './previewLink.module.scss';

export default ({ path, slug, title, date, excerpt, bgUrl }) => (
  <Link to={path} className={styles.previewLink}>
    <div
      key={slug}
      className={styles.previewContainer}
      //   style={{
      //     backgroundImage: `linear-gradient(
      //     to right bottom,
      //     rgba(74,136,22, 0.3),
      //     rgba(74,136,22, 0.3)
      // ), url(${bgUrl})`,
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundColor: `rgba(74,136,22, 0.5)`,
        backgroundBlendMode: 'lighten',
      }}
    >
      <h3 dangerouslySetInnerHTML={{ __html: title }} />
      {date}
    </div>

    <div dangerouslySetInnerHTML={{ __html: excerpt }} />
  </Link>
);
