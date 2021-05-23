import React from 'react'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import SEO from '../components/SEO'
import PageLayout from '../components/Layout/PageLayout'
import { PostTitle, SectionTitle } from '../components/PageStyles'
import CollabImage from '../components/Collaborations/CollabImage'
import { colors } from '../constants/colors'
import { defaultHover } from '../constants/animations'
import { breakpointsDown } from '../constants/breakpoints'

export default function SeriesPage() {
  return (
    <PageLayout>
      <SEO title="Collaborations" />
      <PostTitle>Collaborations</PostTitle>
      <SectionTitle>Listen to us elsewhere!</SectionTitle>
      <CollabGallery>
        <div>
          <CollabLink
            target="_blank"
            rel="noopener noreferrer"
            href="http://outsideinradio.org/shows/rice-is-food "
          >
            <CollabImage image="outsidein" />
            <SeriesTitle>Outside In</SeriesTitle>
          </CollabLink>
          <CollabEpisodeTitle>Rice is Food and Other Stories</CollabEpisodeTitle>
          <CollabEpisodeDate>September, 2020</CollabEpisodeDate>
          <p>
            In a follow-up episode to Outside/In’s “Greatest Fruit of All Time” episode, Hallie and
            others submit their cases for the best fruit ever, and hosts explore the intersections
            of fruit, food, and colonialism.
          </p>
        </div>

        <div>
          <CollabLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.planthropologypod.com/home/deepdive-halliecasey"
          >
            <CollabImage image="planthropology" />
            <SeriesTitle>Planthropology</SeriesTitle>
          </CollabLink>
          <CollabEpisodeTitle>Deep Dive- Fixing Food Systems w/ Hallie Casey</CollabEpisodeTitle>
          <CollabEpisodeDate>August, 2020</CollabEpisodeDate>
          <p>
            Aren’t plant people awesome? Planthropology host Vikram Baliga interviews Hallie the ins
            and outs of food supply and how moving to local and regional market strategies can help
            fix some of the problems.
          </p>
        </div>

        <div>
          <CollabLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://thefarmtraveler.com/2020/07/22/podcast-episode-66-one-to-grow-on-podcast/ "
          >
            <CollabImage image="farmtraveler" />
            <SeriesTitle>Farm Traveller</SeriesTitle>
          </CollabLink>
          <CollabEpisodeTitle>Podcast Episode 66: One to Grow On Podcast</CollabEpisodeTitle>
          <CollabEpisodeDate>July, 2020</CollabEpisodeDate>
          <p>
            In Farm Traveler, a podcast about bridging the gap between farmers and consumers, Hallie
            and Chris talk about why they started the podcast, who their audience is, and
            fascinating topics they’ve learned about on the show.
          </p>
        </div>

        <div>
          <CollabLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://horticulturati.libsyn.com/local-food-living-soil-with-hallie-casey"
          >
            <CollabImage image="horticulturati" />
            <SeriesTitle>Horticulturati</SeriesTitle>
          </CollabLink>
          <CollabEpisodeTitle>Local Food & Living Soil (with Hallie Casey)</CollabEpisodeTitle>
          <CollabEpisodeDate>April, 2020</CollabEpisodeDate>
          <p>
            The Horticulturati is a gardening talkshow, and on this episode hosts Leah and Colleen
            interview Hallie about how the global pandemic impacting local food systems.
          </p>
        </div>

        <div>
          <CollabLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://puttingittogether.transistor.fm/s6/10"
          >
            <CollabImage image="puttingittogether" />
            <SeriesTitle>Putting It Together</SeriesTitle>
          </CollabLink>
          <CollabEpisodeTitle>
            Getting Married Today – Company (with Hallie Casey)
          </CollabEpisodeTitle>
          <CollabEpisodeDate>February, 2020</CollabEpisodeDate>
          <p>
            Putting It Together is a podcast about Stephen Sondheim’s entire body of work show by
            show and song by song. Hallie joins host Kyle to discuss relationships, updated lyrics,
            and a book written in 1852.
          </p>
        </div>

        <div>
          <CollabLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.planthropologypod.com/home/halliecasey"
          >
            <CollabImage image="planthropology" />
            <SeriesTitle>Planthropology</SeriesTitle>
          </CollabLink>
          <CollabEpisodeTitle>
            Episode 5: Hallie Casey- Science Communication, One to Grow On, and Giant Entomology
            Books
          </CollabEpisodeTitle>
          <CollabEpisodeDate>January, 2020</CollabEpisodeDate>
          <div>
            Aren’t plant people awesome? Planthropology host Vikram Baliga interviews Hallie about
            her path to agriculture, thoughts about science communication, and feelings about
            gatekeeping in agriculture.
          </div>
        </div>

        <div>
          <CollabLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://spiritspodcast.com/episodes/gods-goddesses-of-agriculture?rq=hallie"
          >
            <CollabImage image="spirits" />
            <SeriesTitle>Spirits</SeriesTitle>
          </CollabLink>
          <CollabEpisodeTitle>
            Episode 144: Gods & Goddesses of Agriculture (with Hallie Casey and Catherine Arjet)
          </CollabEpisodeTitle>
          <CollabEpisodeDate>September, 2019</CollabEpisodeDate>
          <div>
            Spirits is a boozy podcast about mythology, legends, and folklore. Hallie and Producer
            Catherine discuss some of their favorite gods and goddesses of agriculture.
          </div>
        </div>
      </CollabGallery>
    </PageLayout>
  )
}

const CollabGallery = styled.div.attrs(() => ({
  className: 'collab-gallery',
}))`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1.2rem;
  grid-row-gap: 2.4rem;

  ${breakpointsDown.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const SeriesTitle = styled.h3`
  font-family: 'Lilita One', cursive;
  line-height: 1.3;
  font-size: 2rem;
  font-weight: normal;
  margin-bottom: 0.3rem;
`

const CollabEpisodeTitle = styled.div`
  font-weight: bold;
`

const CollabEpisodeDate = styled.div`
  margin-bottom: 0.5rem;
  font-style: italic;
`

export const CollabLink = styled(OutboundLink)`
  &,
  &:link,
  &:visited {
    display: inline-block;
    text-decoration: none;
    color: ${colors.purpleDark};
    width: 100%;
    border-radius: 3px;
    transition-duration: ${defaultHover};
  }

  &:hover {
    color: ${colors.orangeLight};
    transition-duration: ${defaultHover};
    /* box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(60, 155, 160, 0.14),
      0px 2px 10px -1px rgba(60, 155, 160, 0.12); */
`
