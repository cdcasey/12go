import React from 'react';
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { colors } from '../../constants/colors';
import { breakpointsDown } from '../../constants/breakpoints';

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

const activeStyle = {
  color: colors.orangeLight,
};

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

function MainMenu() {
  return (
    <StyledMenuList>
      <StyledMenuItem>
        <MenuLink to="/">Episodes</MenuLink>
        <StyledDropDownMenuList>
          <StyledMenuItem>
            <MenuLink to="/series-and-minisodes">Series and Minisodes</MenuLink>
          </StyledMenuItem>
          <StyledMenuItem>
            <MenuLink to="/transcripts">Transcripts</MenuLink>
          </StyledMenuItem>
        </StyledDropDownMenuList>
      </StyledMenuItem>

      <StyledMenuItem>
        <MenuLink to="/about">About</MenuLink>
        <StyledDropDownMenuList>
          <StyledMenuItem>
            <MenuLink to="/press">Press Kit</MenuLink>
          </StyledMenuItem>
          <StyledMenuItem>
            <MenuLink to="/collaborations">Collaborations</MenuLink>
          </StyledMenuItem>
          <StyledMenuItem>
            <MenuLink to="/contact">Contact</MenuLink>
          </StyledMenuItem>
        </StyledDropDownMenuList>
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
      {/* <StyledMenuItem>
        <ExternalLink
          href="https://iteratehq.com/one-to-grow-on-podcast/5e0f6e39756c7500013a92b3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Listener Survey
        </ExternalLink>
      </StyledMenuItem> */}
    </StyledMenuList>
  );
}

MainMenu.propTypes = propTypes;

export default () => <StaticQuery query={menuQuery} render={MainMenu} />;

const StyledMenuList = styled.ul`
  display: flex;
  list-style-type: none;

  ${breakpointsDown.tablet} {
    flex-direction: column;
  }
`;

const StyledDropDownMenuList = styled.ul`
  position: absolute;
  display: none;
  list-style-type: none;
  background-color: ${colors.white};
  z-index: 1;

  ${breakpointsDown.tablet} {
    flex-direction: column;
    display: inline-block;
    position: unset;
    z-index: unset;
    margin-left: 1rem;
    margin-bottom: 0.4rem;
  }
`;

const StyledMenuItem = styled.li`
  &:hover ${StyledDropDownMenuList} {
    display: flex;
    flex-direction: column;
  }

  margin-right: 1rem;
  font-size: 1.8rem;
  font-weight: bold;
`;

const MenuLink = styled(Link).attrs(() => ({
  activeStyle,
  isPartiallyActive: true,
}))`
  &,
  &:link,
  &:visited {
    text-decoration: none;
    color: ${colors.purpleDark};
    display: inline-block;
    width: 100%;
  }
  &:hover {
    background-color: ${colors.greenLight};

    ${breakpointsDown.tablet} {
      background-color: unset;
    }
  }
`;

const ExternalLink = styled(OutboundLink)`
  &,
  &:link,
  &:visited {
    text-decoration: none;
    color: ${colors.purpleDark};
  }
  &:hover {
    background-color: ${colors.greenLight};
    background-color: unset;
  }
`;
