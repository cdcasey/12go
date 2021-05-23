import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { colors } from '../../constants/colors'
import { MenuButton } from './MenuButton'
import { defaultHover } from '../../constants/animations'

const activeStyle = {
  color: colors.orangeLight,
}

const propTypes = {
  data: PropTypes.shape({}).isRequired,
}

function MainMenu() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false)
  return (
    <React.Fragment>
      <MenuButton open={menuIsOpen} setOpen={setMenuIsOpen} />
      <StyledNav open={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)}>
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
            <OLink
              href="https://www.patreon.com/onetogrowonpod"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support
            </OLink>
          </StyledMenuItem>
          {/* <StyledMenuItem>
        <Olink
          href="https://iteratehq.com/one-to-grow-on-podcast/5e0f6e39756c7500013a92b3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Listener Survey
        </Olink>
      </StyledMenuItem> */}
        </StyledMenuList>
      </StyledNav>
    </React.Fragment>
  )
}

MainMenu.propTypes = propTypes

export default MainMenu

const StyledNav = styled.nav`
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 300ms ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${colors.white}e6;
  height: 100vh;
  z-index: 10;
  padding: 9rem 2rem;
`

const StyledMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`

const StyledDropDownMenuList = styled.ul`
  list-style-type: none;
  margin-left: 1rem;
  margin-bottom: 1rem;
`

const StyledMenuItem = styled.li`
  width: 100%;
  font-size: 1.8rem;
  font-weight: bold;
`

const LinkStyles = css`
  &,
  &:link,
  &:visited {
    text-decoration: none;
    color: ${colors.purpleDark};
    display: inline-block;
    width: 100%;
    padding: 0 2rem;
    border-radius: 3px;
    transition-duration: ${defaultHover};
  }
  &:hover {
    background-color: ${colors.greenLight};
    transition-duration: ${defaultHover};
  }
`

const MenuLink = styled(Link).attrs(() => ({
  activeStyle,
  isPartiallyActive: true,
}))`
  ${LinkStyles}
`
const OLink = styled(OutboundLink).attrs(() => ({
  activeStyle,
  isPartiallyActive: true,
}))`
  ${LinkStyles}
`
