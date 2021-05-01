import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'gatsby';
import styled from 'styled-components';

// const propTypes = {
//   open: PropTypes.bool.isRequired,
//   children: PropTypes.node.isRequired,
// };

export function MenuButton() {
  return (
    <React.Fragment>
      <StyledMenuCheckbox id="navi-toggle" />
      <StyledMenuButton htmlFor="navi-toggle">
        <StyledMenuButtonIcon>&nbsp;</StyledMenuButtonIcon>
      </StyledMenuButton>
    </React.Fragment>
  );
}

// MenuButton.propTypes = propTypes;

const StyledMenuButtonIcon = styled.div`
  margin-top: 3.4rem;
  position: relative;
  &,
  &::before,
  &::after {
    width: 3rem;
    height: 2px;
    background-color: purple;
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
`;

const StyledMenuButton = styled.label.attrs(() => ({
  className: 'navigation',
}))`
  background-color: $color-white;
  height: 7rem;
  width: 7rem;
  position: fixed;
  top: 1rem;
  left: 1rem;
  border-radius: 50%;
  z-index: 2000;
  box-shadow: 0 1rem 3rem rgba($color-black, 0.1);
  text-align: center;
  cursor: pointer;

  @include respond(tab-port) {
    top: 4rem;
    right: 4rem;
  }

  @include respond(phone) {
    top: 3rem;
    right: 3rem;
  }

  &__background {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    position: fixed;
    top: 6.5rem;
    right: 6.5rem;
    background-image: radial-gradient($color-primary-light, $color-primary-dark);
    z-index: 1000;
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
    // transform: scale(80);

    @include respond(tab-port) {
      top: 4.5rem;
      right: 4.5rem;
    }

    @include respond(phone) {
      top: 3.5rem;
      right: 3.5rem;
    }
  }

  &__nav {
    height: 100vh;
    // width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1500;

    // hide the menu
    // display can't be animated
    // visibility doesn't animate well
    opacity: 0;
    width: 0;
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  &__list {
    @include centervh;
    list-style: none;
    text-align: center;
    // width: 100%;
  }

  &__item {
    margin: 1rem;
  }

  &__link {
    &:link,
    &:visited {
      display: inline-block;
      font-size: 3rem;
      font-weight: 300;
      padding: 1rem 2rem;
      color: $color-white;
      text-decoration: none;
      text-transform: uppercase;
      background-image: linear-gradient(120deg, transparent 0%, transparent 50%, $color-white 50%);
      background-size: 220%;
      transition: all 0.4s;

      span {
        display: inline-block;
        margin-right: 1.5rem;
      }
    }
    &:hover,
    &:active {
      background-position: 100%;
      color: $color-primary;
      transform: translateX(1rem);
    }
  }

  &__button:hover &__icon:before {
    top: -1rem;
  }
  &__button:hover &__icon:after {
    top: 1rem;
  }
`;

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
`;

export default MenuButton;
