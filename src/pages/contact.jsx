import React from 'react';

import SEO from '../components/SEO';
import PageLayout from '../components/Layout/PageLayout';
import { PostContent, PostTitle, SectionTitle } from '../components/PageStyles';

export default function() {
  return (
    <PageLayout>
      <SEO title="Contact" />
      <PostTitle>Contact</PostTitle>
      <SectionTitle>Find Us Online</SectionTitle>
      <PostContent>
        <p>
          Connect with us and continue chatting about all things agriculture on{' '}
          <a href="http://www.twitter.com/onetogrowonpod">Twitter</a>,{' '}
          <a href="http://www.instagram.com/onetogrowonpod">Instagram</a>, or{' '}
          <a href="https://www.facebook.com/onetogrowonpod">Facebook</a>. Post
          using the hashtag #askonetogrowon to send us a question for the show.
          &nbsp; You can listen on your phone or computer using any podcatcher,
          including:{' '}
          <a href="https://itunes.apple.com/us/podcast/coming-soon/id1437683662?i=1000420674402&amp;mt=2&amp;app=podcast">
            Apple Podcasts
          </a>
          ,{' '}
          <a href="https://open.spotify.com/show/2N8ibfalcLcqK5qVOD6WKI">
            Spotify
          </a>
          ,{' '}
          <a href="https://pca.st/podcast/e303d4c0-a8bc-0136-7b93-27f978dac4db">
            PocketCast
          </a>
          ,{' '}
          <a href="https://overcast.fm/itunes1437683662/one-to-grow-on">
            Overcast
          </a>
          , <a href="https://www.acast.com/onetogrowonpod">Acast</a>,{' '}
          <a href="https://www.stitcher.com/s?fid=240925&amp;refid=stpr">
            Stitcher
          </a>
          ,Soundcloud. You can also find our full episodes on{' '}
          <a href="https://www.youtube.com/channel/UCYcLGNSSRki0-1aFxG7M7wg">
            YouTube
          </a>
          .
        </p>
      </PostContent>
      <SectionTitle>Questions?</SectionTitle>
      <PostContent>
        <p>
          You can ask us any agriculture-related questions by shooting us a DM
          on <a href="http://www.twitter.com/onetogrowonpod">Twitter</a> or{' '}
          <a href="http://www.instagram.com/onetogrowonpod">Instagram</a>, or
          post using the hashtag #askonetogrowon. &nbsp; For business inquiries
          email us at{' '}
          <a href="mailto:onetogrowonpod@gmail.com">
            onetogrowonpod@gmail.com.
          </a>{' '}
        </p>
      </PostContent>
      <SectionTitle>Come Chat with Us!</SectionTitle>
      <PostContent>
        <p>
          Come interact with us and your fellow podfriends! You can chat with us
          in real time on our{' '}
          <a href="https://discordapp.com/invite/YcCCNJv">Discord server</a>, or
          come have a conversation on our{' '}
          <a href="https://www.facebook.com/groups/2433752683575058/">
            Facebook group
          </a>{' '}
          .
        </p>
      </PostContent>
    </PageLayout>
  );
}
