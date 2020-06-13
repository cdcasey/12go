import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Layout from '../components/Layout/Layout';
import PreviewLink from '../components/PreviewLink/PreviewLink';
import { breakpointsDown } from '../constants/breakpoints';

const NavLink = (props) => {
  const url = props.url === '' ? '/' : '/page/' + props.url;
  if (!props.test) {
    return <Link to={url}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>;
  }
};

const IndexPage = ({ pageContext }) => {
  const { group, index, first, last, pageCount } = pageContext;
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (
    <Layout>
      <MainContainer>
        {group.map(({ node }) => {
          const isEpisode =
            node.categories.filter((category) => category?.slug === 'episodes')
              .length > 0;

          const bgUrl = node.featured_media
            ? node.featured_media.localFile?.childImageSharp.fixed.src
            : '';

          if (isEpisode) {
            return (
              <PreviewLink
                key={node.id}
                path={node.path}
                slug={node.slug}
                title={node.title}
                date={node.date}
                excerpt={node.excerpt}
                bgUrl={bgUrl}
              />
            );
          }
          return null;
        })}
      </MainContainer>
      <PageTurners>
        <div className="previousLink">
          <NavLink test={first} url={''} text="<<" />
          &nbsp;&nbsp;
          <NavLink
            test={first}
            url={previousUrl}
            text="<&nbsp;Newer&nbsp;Episodes"
          />
        </div>
        <div>&nbsp;/&nbsp;</div>
        <div className="nextLink">
          <NavLink
            test={last}
            url={nextUrl}
            text="Older&nbsp;Episodes&nbsp;>"
          />
          &nbsp;&nbsp;
          <NavLink test={last} url={pageCount} text=">>" />
        </div>
      </PageTurners>
    </Layout>
  );
};

export default IndexPage;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const PageTurners = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2.5rem;

  ${breakpointsDown.mobileL} {
    font-size: 2rem;
  }
`;
