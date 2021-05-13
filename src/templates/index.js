/* eslint-disable */
import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Layout from '../components/Layout/Layout'
import PreviewLink from '../components/PreviewLink/PreviewLink'
import { breakpointsDown } from '../constants/breakpoints'
import colors from '../constants/colors'
import { defaultHover } from '../constants/animations'

const NavLink = (props) => {
  const url = props.url === '' ? '/' : '/page/' + props.url
  if (!props.test) {
    return <Link to={url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const IndexPage = ({ pageContext }) => {
  const { group, index, first, last, pageCount } = pageContext
  // const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
  // const nextUrl = (index + 1).toString();

  const MAX_POSTS = group.length

  const setPostNum = () => {
    setPostLimit((prevPostLimit) => {
      let newPostLimit = prevPostLimit + 6
      newPostLimit = newPostLimit >= MAX_POSTS ? MAX_POSTS : newPostLimit
      return newPostLimit
    })
  }

  const [postLimit, setPostLimit] = React.useState(9)

  const shownPosts = group.slice(0, postLimit)

  return (
    <Layout>
      <MainContainer>
        {shownPosts.map(({ node }) => {
          const isEpisode =
            node.categories.filter((category) => category?.slug === 'episodes').length > 0

          const bgUrl = node.featured_media
            ? node.featured_media.localFile?.childImageSharp.fixed.src
            : ''

          if (isEpisode) {
            return (
              <PreviewLink
                key={node.id}
                path={node.path}
                slug={node.slug}
                title={node.title}
                date={node.date}
                excerpt={node.excerpt}
                bgUrl={bgUrl}
              />
            )
          }
          return null
        })}
      </MainContainer>

      <MoreButton type="button" onClick={setPostNum} disabled={postLimit >= MAX_POSTS}>
        {postLimit >= MAX_POSTS ? <span>That&rsquo;s it!</span> : 'More...'}
      </MoreButton>

      {/* <PageTurners>
        <div className="previousLink">
          <NavLink test={first} url={''} text="<<" />
          &nbsp;&nbsp;
          <NavLink
            test={first}
            url={previousUrl}
            text="<&nbsp;Newer&nbsp;Episodes"
          />
        </div>
        <div>&nbsp;/&nbsp;</div>
        <div className="nextLink">
          <NavLink
            test={last}
            url={nextUrl}
            text="Older&nbsp;Episodes&nbsp;>"
          />
          &nbsp;&nbsp;
          <NavLink test={last} url={pageCount} text=">>" />
        </div>
      </PageTurners> */}
    </Layout>
  )
}

export default IndexPage

const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const MoreButton = styled.button`
  margin: auto;
  display: block;
  color: ${colors.purpleDark};
  font-size: 4rem;
  font-family: 'Lilita One';
  border: none;
  background-color: unset;
  cursor: ${(props) => (props.disabled ? '' : 'pointer')};
  transition-duration: ${defaultHover};

  &:hover {
    color: ${(props) => (props.disabled ? '' : colors.orangeDark)};
    transition-duration: ${defaultHover};
  }
`

// const PageTurners = styled.div`
//   display: flex;
//   justify-content: center;
//   font-size: 2.5rem;

//   ${breakpointsDown.mobileL} {
//     font-size: 2rem;
//   }
// `
