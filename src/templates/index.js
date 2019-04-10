import React, { Component } from 'react';
import Link from 'gatsby-link';

import Layout from '../components/layout/layout';

const NavLink = props => {
  console.log('PROPS', props);
  const url = props.url === '' ? '/' : '/page/' + props.url;
  if (!props.test) {
    return <Link to={url}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>;
  }
};

const IndexPage = ({ pageContext }) => {
  const { group, index, first, last, pageCount } = pageContext;
  const previousUrl = index - 1 == 1 ? '' : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  console.log('GROUP', group);

  return (
    <Layout>
      <div>
        {group.map(({ node }) => (
          <div key={node.slug} className={'post'} style={{ marginBottom: 50 }}>
            <Link to={node.path}>
              <h3 dangerouslySetInnerHTML={{ __html: node.title }} />
            </Link>

            <div
              className={'post-content'}
              dangerouslySetInnerHTML={{ __html: node.excerpt }}
            />

            {node.date}
          </div>
        ))}
        <div className="previousLink">
          <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
        </div>
        <div className="nextLink">
          <NavLink test={last} url={nextUrl} text="Go to Next Page" />
        </div>
      </div>
    </Layout>
  );
};
export default IndexPage;
