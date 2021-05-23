/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import PreviewLink from '../components/PreviewLink/PreviewLink'
import { MainContainer } from '../components/MainContainer'

const propTypes = {
  data: PropTypes.shape({
    allWpPost: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }).isRequired,
}

const TagIndexPage = ({ data }) => {
  const { edges } = data.allWpPost

  return (
    <Layout>
      <MainContainer>
        {edges.map(({ node }) => {
          const bgUrl = node.featuredImage.node
            ? node.featuredImage.node.localFile?.childImageSharp.fixed.src
            : ''
          return (
            <PreviewLink
              key={node.id}
              uri={node.uri}
              slug={node.slug}
              title={node.title}
              date={node.date}
              excerpt={node.excerpt}
              bgUrl={bgUrl}
            />
          )
        })}
      </MainContainer>
    </Layout>
  )
}

TagIndexPage.propTypes = propTypes

export default TagIndexPage

export const query = graphql`
  query($tag: String) {
    allWpPost(filter: { tags: { nodes: { elemMatch: { slug: { eq: $tag } } } } }) {
      edges {
        node {
          id
          slug
          uri
          title
          date(formatString: "MMMM DD, YYYY")
          excerpt
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  fixed(width: 300, height: 200) {
                    width
                    height
                    src
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
