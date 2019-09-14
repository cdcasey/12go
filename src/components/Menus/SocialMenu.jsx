import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import style from './socialmenu.module.scss';

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

const propTypes = {
  data: PropTypes.shape({}).isRequired,
};

function SocialMenuItems({ data }) {
  return data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => {
    return (
      <li key={item.wordpress_id}>
        <a href={item.url}>{item.title}</a>
      </li>
    );
  });
}

function SocialMenu(data) {
  return (
    <ul className={style.socialMenu}>
      <SocialMenuItems data={data} />
    </ul>
  );
}

SocialMenu.propTypes = propTypes;

export default props => <StaticQuery query={menuQuery} render={SocialMenu} />;
