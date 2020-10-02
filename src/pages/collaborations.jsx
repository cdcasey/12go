import React from 'react';
import styled from 'styled-components';

import SEO from '../components/SEO';
import PageLayout from '../components/Layout/PageLayout';
import { PostTitle, ExternalLink } from '../components/PageStyles';

import CollabImage from '../components/Collaborations/CollabImage';

export default function SeriesPage() {
  return (
    <PageLayout>
      <SEO title="Collaborations" />
      <PostTitle>Collaborations</PostTitle>

      <CollabGallery>
        <div>
          <CollabImage image="horticulturati" />
          <SeriesTitle>
            <ExternalLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://horticulturati.libsyn.com/local-food-living-soil-with-hallie-casey"
            >
              Horticulturati
            </ExternalLink>
          </SeriesTitle>
          <div>Local Food and Living Soil</div>
        </div>

        <div>
          <CollabImage image="planthropology" />
          <SeriesTitle>
            <ExternalLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.planthropologypod.com/home/deepdive-halliecasey"
            >
              Planthropology
            </ExternalLink>
          </SeriesTitle>
          <div>Fixing Food Systems</div>
        </div>

        <div>
          <CollabImage image="planthropology" />
          <SeriesTitle>
            <ExternalLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.planthropologypod.com/home/halliecasey"
            >
              Planthropology
            </ExternalLink>
          </SeriesTitle>
          <div>Science Communication</div>
        </div>

        <div>
          <CollabImage image="spirits" />
          <SeriesTitle>
            <ExternalLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://spiritspodcast.com/episodes/gods-goddesses-of-agriculture"
            >
              Spirits
            </ExternalLink>
          </SeriesTitle>
          <div>Gods & Goddesses of Agriculture</div>
        </div>
      </CollabGallery>
    </PageLayout>
  );
}

const CollabGallery = styled.div.attrs(() => ({
  className: 'collab-gallery',
}))`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.6rem;
`;

const SeriesTitle = styled.h3`
  font-family: 'Lilita One', cursive;
  line-height: 1.3;
  font-size: 2rem;
  font-weight: normal;
  margin-bottom: 0.3rem;
`;
