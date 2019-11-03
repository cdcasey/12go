import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

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
const scaler = base => Math.log(Math.sqrt(base)) + 1.4;

function TagMenuItems({ data }) {
  const { edges } = data.allWordpressTag;

  return edges.map(({ node }) => {
    return (
      <React.Fragment key={node.id}>
        <Link
          to={'/tag/' + node.slug}
          style={{ fontSize: `${scaler(Number(node.count))}rem` }}
        >
          {node.name}
        </Link>{' '}
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
`;
