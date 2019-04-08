import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const menuQuery = graphql`
  query {
    allWordpressWpApiMenusMenusItems(filter: { name: { eq: "Top Menu" } }) {
      edges {
        node {
          name
          items {
            wordpress_id
            order
            wordpress_parent
            title
            url
            attr
            target
            classes
            xfn
            description
            object_id
            object
            object_slug
            type
            type_label
          }
        }
      }
    }
  }
`;

function MainMenu(data) {
  return data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => {
    let menuItem;
    if (item.object_slug === 'support') {
      menuItem = <a href={item.url}>{item.title}</a>;
    } else if (item.object_slug === 'home') {
      menuItem = <Link to="/">{item.title}</Link>;
    } else {
      menuItem = <Link to={item.object_slug}>{item.title}</Link>;
    }
    return <li key={item.wordpress_id}>{menuItem}</li>;
  });
}

export default props => <StaticQuery query={menuQuery} render={MainMenu} />;
