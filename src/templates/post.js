/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import PageLayout from '../components/Layout/PageLayout'
import SEO from '../components/SEO'

const propTypes = {
  data: PropTypes.shape({
    wpPost: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      date: PropTypes.string,
      excerpt: PropTypes.string,
    }),
  }).isRequired,
}

const PostTemplate = ({ data }) => {
  const post = data.wpPost
  const datePublished = post.date.split('T')[0]

  return (
    <PageLayout>
      <SEO title={post.title} description={post.excerpt} />
      <article>
        <PostTitle dangerouslySetInnerHTML={{ __html: post.title }} />
        <time dateTime={datePublished} dangerouslySetInnerHTML={{ __html: datePublished }} />
        <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </PageLayout>
  )
}

PostTemplate.propTypes = propTypes

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
      date
      excerpt
    }
  }
`

const PostContent = styled.section`
  margin-top: 2rem;
  font-size: 1.7rem;

  p {
    margin-bottom: 1rem;
  }

  img {
    float: left;
    margin: 5px 20px 5px 0;
  }

  iframe.blubrryplayer {
    margin-top: 2rem;
  }
`

const PostTitle = styled.h1`
  font-size: 4rem;
`
