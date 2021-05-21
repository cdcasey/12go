/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import PageLayout from '../components/Layout/PageLayout'
import * as styles from './post.module.scss'
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

  return (
    <PageLayout>
      <SEO title={post.title} description={post.excerpt} />
      <h1 className={styles.postTitle} dangerouslySetInnerHTML={{ __html: post.title }} />
      <div dangerouslySetInnerHTML={{ __html: post.date.split('T')[0] }} />
      <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.content }} />
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
