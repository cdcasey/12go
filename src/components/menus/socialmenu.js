import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const menuQuery = graphql`
  query {
    allWordpressWpApiMenusMenusItems(
      filter: { name: { eq: "Social Links Menu" } }
    ) {
      edges {
        node {
          name
          items {
            wordpress_id
            title
            url
          }
        }
      }
    }
  }
`;

function SocialMenu(data) {
  return data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => {
    return (
      <li key={item.wordpress_id}>
        <a href={item.url}>{item.title}</a>
      </li>
    );
  });
}

export default props => <StaticQuery query={menuQuery} render={SocialMenu} />;
