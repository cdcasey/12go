import React from 'react';
import styled from 'styled-components';

import SEO from '../components/SEO';
import PageLayout from '../components/Layout/PageLayout';
import {
  PostContent,
  PostTitle,
  SectionTitle,
  SiteLink,
} from '../components/PageStyles';

export default function SeriesPage() {
  return (
    <PageLayout>
      <SEO title="Series and Minisodes" />
      <PostTitle>Series and Minisodes</PostTitle>
      <SectionTitle>Series</SectionTitle>
      <PostContent>
        <p>
          Series allow us to dive deep into a particularly complicated topic or
          idea in agriculture. When we work on a series, will we take a look at
          a topic and then discuss it over several episodes.{' '}
        </p>
      </PostContent>
      <SeriesSection>
        <SeriesItem>
          <SeriesTitle>
            <SiteLink to="/tag/organic-ag/">
              Organic Agriculture (June-July 2019)
            </SiteLink>
          </SeriesTitle>
          <p>
            In this four-part series, Chris and Hallie dive head first into the
            tangled world of certified organic agriculture. They go in-depth
            about the history of the movement, the proper definitions of the
            term “organic,” and discuss the environmental, economic, and human
            health costs, benefits, and trade-offs of growing organic.
          </p>
        </SeriesItem>
        <SeriesItem>
          <SeriesTitle>
            <SiteLink to="/tag/water/">Water (January 2020)</SiteLink>
          </SeriesTitle>
          <p>
            In this two-part series, our hosts jump into the history and
            present-day challenges of water. In episode one, Hallie and Chris
            talk about irrigation development throughout history and around the
            globe. In the second episode, they learn about how much water is
            required to produce a plate of food, and talk through some of the
            challenges facing the agriculture industry today.
          </p>
        </SeriesItem>
      </SeriesSection>
      <SectionTitle>Special Episodes</SectionTitle>
      <PostContent>
        <p>
          Every once in a while, we like to shake up our format a little. In
          special episodes, we look at topics in agriculture in a slightly
          different way.
        </p>
      </PostContent>
      <SeriesSection>
        <SeriesItem>
          <SeriesTitle>
            <SiteLink to="/tag/superfoods/">Superfoods</SiteLink>
          </SeriesTitle>
          <p>
            Every few months we take a break from our usual format to do a
            round-up of “superfoods!” In these special episodes, Hallie and
            Chris discuss four or more foods that have been given the marketing
            mantle of a “superfood.” They discuss the plant, its history as a
            crop, and debate just how super it actually is.
          </p>
        </SeriesItem>
        <SeriesItem>
          <SeriesTitle>
            <SiteLink to="/tag/question-episode/">
              Questions with Catherine
            </SiteLink>
          </SeriesTitle>
          <p>
            Producer Catherine Arjet usually is a behind-the-scenes presence on
            One to Grow On. But once in a while we like to do episodes where
            Catherine asks some basic questions. Catherine doesn’t have a
            background in agriculture and so often finds herself shocked and
            surprised when doing research for the show. These episodes are fun,
            chatty, and will almost always surprise you.
          </p>
        </SeriesItem>
      </SeriesSection>
      <SectionTitle>Minisodes</SectionTitle>
      <PostContent>
        <p>
          Occasionally, we have a topic that is super interesting but not long
          enough to take up a full episode. For these, we do a minisode where we
          can dive deep into a topic for just a little bit of time.{' '}
        </p>
      </PostContent>
      <SeriesSection>
        <SeriesItem>
          <SeriesTitle>
            <SiteLink to="/tag/askonetogrowon/">#AskOnetoGrowOn</SiteLink>
          </SeriesTitle>
          <p>
            If you have a question about agriculture, we want to get you
            answers. On these minisodes (&lt;10 minutes long), Hallie will take
            a short query or brief uncertainty and provide some quick answers.
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
