import React from 'react';
import Link from 'gatsby-link';

import Layout from '../components/Layout/Layout';
import PreviewLink from '../components/PreviewLink/PreviewLink';
import styles from './index.module.scss';

const NavLink = props => {
  const url = props.url === '' ? '/' : '/page/' + props.url;
  if (!props.test) {
    return <Link to={url}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>;
  }
};

const IndexPage = ({ pageContext }) => {
  const { group, index, first, last } = pageContext;
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (
    <Layout>
      <div className={styles.mainContainer}>
        {group.map(({ node }) => {
          const bgUrl = node.featured_media
            ? node.featured_media.localFile.childImageSharp.fixed.src
            : '';
          return (
            <PreviewLink
              path={node.path}
              slug={node.slug}
              title={node.title}
              date={node.date}
              excerpt={node.excerpt}
              bgUrl={bgUrl}
            />
          );
        })}
      </div>
      <div className={styles.pageTurners}>
        <div className="previousLink">
          <NavLink test={first} url={previousUrl} text="<< Newer Posts" />
        </div>
        &nbsp;/&nbsp;
        <div className="nextLink">
          <NavLink test={last} url={nextUrl} text="Older Posts >>" />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
