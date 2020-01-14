import React from 'react';
import styled from '@emotion/styled';

import { colors } from '../../constants/colors';
import { breakpointsDown } from '../../constants/breakpoints';

export default function({ title, path, href }) {
  return (
    <IconLink href={href} target="_blank" rel="noopener noreferrer">
      <SVGIcon
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill={colors.white}
      >
        <title>{title}</title>
        <path d={path}></path>
      </SVGIcon>
    </IconLink>
  );
}

const IconLink = styled.a`
  display: inline-block;
  &:hover {
    background-color: unset !important;
  }
`;

const SVGIcon = styled.svg`
  fill: ${colors.white};

  &:hover {
    fill: ${colors.orangeLight};
  }

  ${breakpointsDown.tablet} {
    width: 24px;
  }

  ${breakpointsDown.mobileM} {
    width: 18px;
  }
`;
