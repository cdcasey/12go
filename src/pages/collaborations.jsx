import React from 'react';
import styled from 'styled-components';

import SEO from '../components/SEO';
import PageLayout from '../components/Layout/PageLayout';
import { PostContent, PostTitle, SectionTitle, SiteLink } from '../components/PageStyles';

export default function SeriesPage() {
  return (
    <PageLayout>
      <SEO title="Collaborations" />
      <PostTitle>Collaborations</PostTitle>

      <SectionTitle>Horticulturati</SectionTitle>
      <PostContent>
        <p>
          The Horticulturati is a biweekly-ish gardening talkshow cohosted by Austin-based landscape
          designers Leah Churner and Colleen Dieter. Join them for gossip, gripes, and fun plant
          facts!
        </p>
      </PostContent>

      <SeriesSection>
        <SeriesItem>
          <SeriesTitle>
            <SiteLink to="https://horticulturati.libsyn.com/local-food-living-soil-with-hallie-casey">
              Local Food and Living Soil
            </SiteLink>
          </SeriesTitle>
          <p>
            How is the global pandemic impacting local food systems? We interview @Hallie_Casey of
            Sustainable Food Center and On To Grow On podcast to find out. We discuss food supply
            chains, how local farmers’ markets are adapting, and who counts as “essential” workers
            during a Shelter in Place Order. Then we dig into a more fun topic: soil! How do you
            know if your soil is healthy? What’s the role of soil in regenerative agriculture?
            Lastly, we introduce a segment called the “Gardener’s Gauntlet,” in which we invite
            guests to spill their horticultural passions and peeves.
          </p>
        </SeriesItem>
      </SeriesSection>

      <SectionTitle>Planthropology</SectionTitle>
      <PostContent>
        <p>
          From the soil to the plate to the climate, dive into the anthropology of plants (get it?)
          and learn a little more about why you should care about the world around you from the
          people who care about it the most.
        </p>
      </PostContent>
      <SeriesSection>
        <SeriesItem>
          <SeriesTitle>
            <SiteLink to="https://www.planthropologypod.com/home/deepdive-halliecasey">
              Deep Dive- Fixing Food Systems w/ Hallie Casey
            </SiteLink>
          </SeriesTitle>
          <p>
            It’s time for our first Deep Dive episode! You may have noticed during this whole Covid
            crisis that some types of foods were pretty scarce on the shelves at your local grocery
            store. A lot of this is due to holes in the food supply chain. Hallie Casey from the One
            to Grow On podcast joins me again to talk about some of the ins and outs of food supply
            and how moving to local and regional market strategies can help fix some of the
            problems. Hallie is brilliant and well spoken and you’re going to learn so much on
            today’s episode!
          </p>
        </SeriesItem>
        <SeriesItem>
          <SeriesTitle>
            <SiteLink to="https://www.planthropologypod.com/home/halliecasey">
              Hallie Casey- Science Communication, One to Grow On, and Giant Entomology Books
            </SiteLink>
          </SeriesTitle>
          <p>
            Tune in as Vikram chats with Hallie about everything from 4-H and Extension, to the ways
            we communicate science to the public, to whether or not you need to read your entomology
            textbook.
          </p>
        </SeriesItem>
      </SeriesSection>

      <SectionTitle>Spirits</SectionTitle>
      <PostContent>
        <p>
          Spirits is a history and comedy podcast about mythology, folklore, and urban legends.
          Every week we pour a drink and dive into a new story from around the world. Hear fresh
          takes on classic myths and learn new stories from around the world, served up over ice by
          two tipsy history geeks.
        </p>
      </PostContent>
      <SeriesSection>
        <SeriesItem>
          <SeriesTitle>
            <SiteLink to="https://spiritspodcast.com/episodes/gods-goddesses-of-agriculture">
              Gods &amp; Goddesses of Agriculture (with Hallie Casey and Catherine Arjet)
            </SiteLink>
          </SeriesTitle>
          <p>
            The only thing we love more than a farmers market is, you know, the whole human project
            of agriculture. Hallie Casey and Catherine Arjet from One to Grow On introduce us to
            some of their favorite gods and goddesses of agriculture! In this house we stan Demeter,
            gardens, hospitality, and community-oriented storytelling. And remember,
            #agricultureispraxis.
          </p>
        </SeriesItem>
      </SeriesSection>
    </PageLayout>
  );
}

const SeriesSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 1%;
`;

const SeriesItem = styled.div`
  flex: 0 49%;
  & p {
    font-size: 1.7rem;
  }
`;

const SeriesTitle = styled.h3`
  font-family: 'Lilita One', cursive;
  /* font-family: Bitter, Georgia, serif; */
  line-height: 1.3;
  font-size: 2rem;
  font-weight: normal;
  margin-top: 3rem;
  margin-bottom: 0.3rem;
`;
