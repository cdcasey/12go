import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const tagQuery = graphql`
  query {
    allWordpressTag {
      edges {
        node {
          id
          count
          name
          link
        }
      }
    }
  }
`;

const scaler = base => Math.pow(base, 1 / 1.3);

function TagMenu(data) {
  const { edges } = data.allWordpressTag;

  return edges.map(({ node }) => {
    return (
      <span
        key={node.id}
        style={{ fontSize: `${scaler(Number(node.count))}rem` }}
      >
        {node.name}
      </span>
    );
  });
}

export default props => <StaticQuery query={tagQuery} render={TagMenu} />;
