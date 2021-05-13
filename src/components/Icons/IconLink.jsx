import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from '../../constants/colors'
import { breakpointsDown } from '../../constants/breakpoints'
import { defaultHover } from '../../constants/animations'

const propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

export default function StyledIconLink({ title, path, href }) {
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
        <path d={path} />
      </SVGIcon>
    </IconLink>
  )
}

StyledIconLink.propTypes = propTypes

const IconLink = styled.a`
  display: inline-block;

  &:hover {
    background-color: unset !important;
  }
`

const SVGIcon = styled.svg`
  fill: ${colors.white};
  transition-duration: ${defaultHover};

  &:hover {
    fill: ${colors.orangeLight};
    transition-duration: ${defaultHover};
  }

  ${breakpointsDown.tablet} {
    width: 24px;
  }

  ${breakpointsDown.mobileM} {
    width: 18px;
  }
`
