import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import { colors } from '../../constants/colors';
import { breakpointsDown } from '../../constants/breakpoints';

const tagQuery = graphql`
  query {
    allWordpressTag {
      edges {
        node {
          id
          count
          name
          link
          slug
        }
      }
    }
  }
`;

// const scaler = base => Math.pow(base, 1 / 1.3);
// const scaler = base => Math.log(base) + 1;
const scaler = (base) => Math.log(Math.sqrt(base)) + 1.4;

function TagMenuItems({ data }) {
  const { edges } = data.allWordpressTag;

  return edges.map(({ node }) => {
    return (
      <React.Fragment key={node.id}>
        <TagLink to={'/tag/' + node.slug} nodeCount={node.count}>
          {node.name}
        </TagLink>{' '}
      </React.Fragment>
    );
  });
}

function TagMenu(data) {
  return (
    <TagContainer>
      <TagLabel>Browse by tag: </TagLabel>
      <TagMenuItems data={data} />
    </TagContainer>
  );
}

export default () => <StaticQuery query={tagQuery} render={TagMenu} />;

const TagLabel = styled.div`
  font-family: 'Lilita One';
  font-size: 2.5rem;
  display: inline;
`;

const TagContainer = styled.div`
  padding: 12px;

  ${breakpointsDown.tablet} {
    padding: unset;
  }
`;

const TagLink = styled(Link)`
  font-size: ${({ nodeCount }) => scaler(Number(nodeCount))}rem;

  &,
  &:link,
  &:visited {
    color: ${colors.white};
    text-decoration: none;
  }

  &:hover {
    color: ${colors.greenDark};
    background-color: ${colors.greenLight};
  }
`;
