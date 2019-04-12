import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import styles from './mainmenu.module.scss';

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

function MainMenuItems({ data }) {
  return data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => {
    let menuItem;
    if (item.object_slug === 'support') {
      menuItem = <a href={item.url}>{item.title}</a>;
    } else if (item.object_slug === 'home') {
      menuItem = (
        <Link to="/" activeClassName={styles.active}>
          {item.title}
        </Link>
      );
    } else {
      menuItem = (
        <Link to={item.object_slug} activeClassName={styles.active}>
          {item.title}
        </Link>
      );
    }
    return <li key={item.wordpress_id}>{menuItem}</li>;
  });
}

function MainMenu(data) {
  // const { items } = data.allWordpressWpApiMenusMenusItems.edges[0].node;
  return (
    <ul className={styles.mainMenu}>
      <MainMenuItems data={data} />
    </ul>
  );
}
export default props => <StaticQuery query={menuQuery} render={MainMenu} />;
