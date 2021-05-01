import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'gatsby';
import styled from 'styled-components';

const propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

function Popup({ open, children }) {
  if (open) {
    console.log(open, children);
    return <StyledPopup>{children}</StyledPopup>;
  }

  return null;
}

Popup.propTypes = propTypes;

const StyledPopup = styled.div`
  z-index: 2;
  /* background-color: green; */
`;

export default Popup;
