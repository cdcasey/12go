import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from '../../constants/colors'

const propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}

export function MenuButton({ open, setOpen }) {
  return (
    <React.Fragment>
      <StyledMenuCheckbox id="navi-toggle" onClick={() => setOpen(!open)} checked={open} />
      <StyledMenuButton htmlFor="navi-toggle">
        <StyledMenuButtonIcon>&nbsp;</StyledMenuButtonIcon>
      </StyledMenuButton>
    </React.Fragment>
  )
}

MenuButton.propTypes = propTypes

const StyledMenuButtonIcon = styled.div`
  margin-top: 3.4rem;
  position: relative;
  &,
  &::before,
  &::after {
    width: 3rem;
    height: 2px;
    background-color: ${colors.white};
    display: inline-block;
  }

  // Psuedoelements must have content property defined in order to appear
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }

  &::before {
    top: -0.8rem;
  }

  &::after {
    top: 0.8rem;
  }
`

const StyledMenuButton = styled.label.attrs(() => ({
  className: 'navigation',
}))`
  background-color: ${colors.purpleDark};
  opacity: 0.98;
  height: 7rem;
  width: 7rem;
  position: fixed;
  top: 1rem;
  left: 1rem;
  border-radius: 50%;
  z-index: 2000;
  box-shadow: 0 1rem 3rem rgba(${colors.black}, 0.1);
  text-align: center;
  cursor: pointer;
`

const StyledMenuCheckbox = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  display: none;

  // When the checkbox is checked, get the navigation__background element that is a sibling of the checkbox
  &:checked ~ &__background {
    transform: scale(80);
  }

  &:checked ~ &__nav {
    opacity: 1;
    width: 100%;
  }

  // When checkbox is checked, select child of the sibling
  &:checked + ${StyledMenuButton} ${StyledMenuButtonIcon} {
    background-color: transparent;
  }

  &:checked + ${StyledMenuButton} ${StyledMenuButtonIcon}::before {
    transform: rotate(135deg);
    top: 0;
  }

  &:checked + ${StyledMenuButton} ${StyledMenuButtonIcon}::after {
    transform: rotate(-135deg);
    top: 0;
  }
`

export default MenuButton
