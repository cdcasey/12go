import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../../constants/colors';

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

const propTypes = {
  data: PropTypes.shape({}).isRequired,
};
/*
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
    } else if (item.type === 'custom') {
      menuItem = (
        <a href={item.url} activeClassName={styles.active}>
          {item.title}
        </a>
      );
    } else {
      menuItem = (
        <Link to={`/${item.object_slug}`} activeClassName={styles.active}>
          {item.title}
        </Link>
      );
    }
    return <li key={item.wordpress_id}>{menuItem}</li>;
  });
}
*/

function MainMenuItems() {
  // const isPartiallyActive = ({ isPartiallyCurrent }) => {
  //   return isPartiallyCurrent;
  // };

  return (
    <React.Fragment>
      <StyledMenuItem>
        <MenuLink to="/" activeStyle={activeStyle}>
          Home
        </MenuLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <MenuLink to="/about">About</MenuLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <MenuLink to="/series-and-minisodes">Series and Minisodes</MenuLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <MenuLink to="/contact">Contact</MenuLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <MenuLink to="/press">Press Kit</MenuLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <ExternalLink
          href="https://www.patreon.com/onetogrowonpod"
          target="_blank"
          rel="noopener noreferrer"
        >
          Support
        </ExternalLink>
      </StyledMenuItem>
    </React.Fragment>
  );
}

function MainMenu(data) {
  return (
    <StyledMenuList>
      <MainMenuItems data={data} />
    </StyledMenuList>
  );
}

MainMenu.propTypes = propTypes;

export default props => <StaticQuery query={menuQuery} render={MainMenu} />;

const StyledMenuList = styled.ul`
  display: flex;
  list-style-type: none;
`;

const StyledMenuItem = styled.li`
  margin-right: 1rem;
  font-size: 1.8rem;
  font-weight: bold;
`;

const MenuLink = styled(Link).attrs(() => ({
  activeStyle: activeStyle,
  isPartiallyActive: true,
}))`
  &,
  &:link,
  &:visited {
    text-decoration: none;
    color: ${colors.purpleDark};
  }
`;

const ExternalLink = styled.a`
  &,
  &:link,
  &:visited {
    text-decoration: none;
    color: ${colors.purpleDark};
  }
`;

const activeStyle = {
  color: colors.orangeLight,
};
