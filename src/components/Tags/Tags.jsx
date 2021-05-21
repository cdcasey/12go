import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

import { colors } from '../../constants/colors'
import { breakpointsDown } from '../../constants/breakpoints'
import { defaultHover } from '../../constants/animations'

const tagQuery = graphql`
  query {
    allWpTag {
      edges {
        node {
          id
          count
          name
          link
          slug
        }
      }
    }
  }
`

// const scaler = base => Math.pow(base, 1 / 1.3);
// const scaler = base => Math.log(base) + 1;
const scaler = (base) => Math.log(Math.sqrt(base)) + 1.4

function TagMenuItems({ data }) {
  const { edges } = data.allWpTag

  return edges.map(({ node }) => {
    return (
      <React.Fragment key={node.id}>
        <TagLink to={`/tag/${node.slug}`} nodeCount={node.count}>
          {node.name}
        </TagLink>{' '}
      </React.Fragment>
    )
  })
}

function TagMenu(data) {
  return (
    <TagContainer>
      <TagLabel>Browse by tag: </TagLabel>
      <TagMenuItems data={data} />
    </TagContainer>
  )
}

export default () => <StaticQuery query={tagQuery} render={TagMenu} />

const TagLabel = styled.div`
  font-family: 'Lilita One';
  font-size: 2.5rem;
  display: inline;
`

const TagContainer = styled.div`
  padding: 12px;

  ${breakpointsDown.tablet} {
    padding: unset;
  }
`

const TagLink = styled(Link)`
  font-size: ${({ nodeCount }) => scaler(Number(nodeCount))}rem;
  border-radius: 3px;
  padding: 0 0.2rem;

  &,
  &:link,
  &:visited {
    color: ${colors.white};
    text-decoration: none;
    transition-duration: ${defaultHover};
  }

  &:hover {
    color: ${colors.greenDark};
    background-color: ${colors.greenLight};
    transition-duration: ${defaultHover};
  }
`
