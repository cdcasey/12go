import React from 'react';
import styled from 'styled-components';

import SEO from '../components/SEO';
import PageLayout from '../components/Layout/PageLayout';
import { PostContent, PostTitle, SectionTitle } from '../components/PageStyles';
import { colors } from '../constants/colors';

export default function PressPage() {
  return (
    <PageLayout>
      <SEO title="Press Kit" />
      <PostTitle>Press Kit</PostTitle>
      <SectionTitle>What We Do</SectionTitle>
      <PostContent>
        <p>
          <em>One to Grow On</em> is a podcast where we dig into questions about
          agriculture and try to understand how food production impacts us and
          our world. Each episode, hosts Hallie and Chris pick an area of
          agriculture or food production to discuss. Listen for plant facts, dad
          jokes, and the stories behind your food.
        </p>

        <p>
          <em>One to Grow On</em> is an older kid-friendly podcast that is safe
          and appropriate for listeners of all ages. There are a few clearly
          marked episodes that contain content that may not be suitable for all
          ages
        </p>

        <p>
          Our episodes are published every other Tuesday and run 20-40 minutes.
          You don’t need to listen in order; scroll through episode titles or
          explore episodes by subject matter on our website.
        </p>
      </PostContent>

      <SectionTitle>Trailer</SectionTitle>
      <PostContent>
        <iframe
          title="promo"
          src="https://player.blubrry.com/?media_url=https%3A%2F%2Fdts.podtrac.com%2Fredirect.mp3%2Fmedia.blubrry.com%2Fonetogrowon%2Fp%2Fcontent.blubrry.com%2Fonetogrowon%2Fpromo.mp3&amp;podcast_link=https%3A%2F%2F12go.onetogrowonpod.com%2Fcoming-soon%2F#darkOrLight-light&shownotes-ffffff&shownotesBackground-444444&download-ffffff&downloadBackground-4e2668&subscribe-ffffff&subscribeBackground-f68722&share-ffffff&shareBackground-1976d2"
          scrolling="no"
          width="100%"
          height="138px"
          frameBorder="0"
          id="blubrryplayer-40"
          className="blubrryplayer"
        />
      </PostContent>

      <SectionTitle>Who We Are </SectionTitle>
      <PostContent>
        <p>
          <strong>Hallie Casey</strong> is a <em>One to Grow On</em> host and
          producer. She is a native Texan and passionate about agricultural
          sustainability and communication. Her love of science communication
          began at 12 when she co-founded Discover Green, a statewide non-profit
          focused on promoting youth leadership in environmental activism. She
          continued to work in science communication focused on agriculture and
          plant science, primarily through work in online video. Hallie got a
          bachelor’s in agribusiness from Texas State University and a master’s
          in International Agricultural Development at the University of
          California, Davis. She now lives in Austin, Texas. While not working,
          she enjoys mystery novels and lemon tarts.
        </p>

        <p>
          <strong>Chris Casey</strong> is a host of <em>One to Grow On</em>. A
          long-time lover of podcasts, he is thrilled to be learning about
          agriculture from his daughter along with the audience. Chris is a
          computer software engineer and semi-professional stage actor.
          Previously, he hosted the podcast <em>eBook Ninjas</em>. Chris lives
          in his hometown, Austin, Texas. When not podcasting, acting, or
          coding, Chris enjoys perfecting his smoked brisket recipe.
        </p>

        <p>
          Show art is by{' '}
          <a href="http://www.marsupialpudding.com/">Ashe Walker</a>.
          <br />
          Music is “Something Elated” by{' '}
          <a href="https://brokeforfree.bandcamp.com/">Broke For Free</a>{' '}
          licensed under a Creative Commons Attribution 3.0 license.
          <br />
          Superfoods music is written and performed by{' '}
          <a href="https://www.kckatalbas.com/">KC Katalbas</a>.
          <br />
          Transcripts by{' '}
          <a href="https://www.linkedin.com/in/maureen-wawira-3b18b4154/">
            Maureen Wawira
          </a>
          .
        </p>
      </PostContent>

      <SectionTitle>Where to Find Us</SectionTitle>
      <PostContent>
        <p>
          <em>One to Grow On</em> is released every other Tuesday on all
          podcasting platforms. If you're looking for us between episodes, check
          out @onetogrowonpod on{' '}
          <a href="http://www.instagram.com/onetogrowonpod">Instagram</a>,{' '}
          <a href="http://www.twitter.com/onetogrowonpod">Twitter</a>, and{' '}
          <a href="https://www.facebook.com/onetogrowonpod">Facebook</a>.
        </p>

        <p>
          Questions, comments, interview requests, or sponsorship inquiries can
          be directed to{' '}
          <a href="mailto:onetogrowonmedia@gmail.com">
            onetogrowonmedia@gmail.com
          </a>
          .
        </p>
      </PostContent>

      <SectionTitle>Gallery</SectionTitle>
      <Gallery>
        <GalleryItem>
          <Figure>
            <a href="https://12go.onetogrowonpod.com/wp-content/uploads/2018/09/IMG_5692_square-1024x1024.jpg">
              <img
                src="https://12go.onetogrowonpod.com/wp-content/uploads/2018/09/IMG_5692_square-1024x1024.jpg"
                alt="brunette girl half smiles in front of trees"
              />
            </a>
            <Caption>
              Hallie Casey
              <br />
              Headshot
            </Caption>
          </Figure>
        </GalleryItem>
        <GalleryItem>
          <Figure>
            <a href="https://12go.onetogrowonpod.com/wp-content/uploads/2018/09/cdc.jpg">
              <img
                src="https://12go.onetogrowonpod.com/wp-content/uploads/2018/09/cdc.jpg"
                alt="Man in sunglasses holding a cigar and a drink and leaning out of a window"
              />
            </a>
            <Caption>
              Chris Casey
              <br />
              Headshot
            </Caption>
          </Figure>
        </GalleryItem>
        <GalleryItem>
          <Figure>
            <a href="https://12go.onetogrowonpod.com/wp-content/uploads/IMG_1128.jpg">
              <img
                src="https://12go.onetogrowonpod.com/wp-content/uploads/IMG_1128.jpg"
                alt="A man and a woman smiling at the camera, in a greenhouse"
              />
            </a>
            <Caption>Chris Casey, Hallie Casey</Caption>
          </Figure>
        </GalleryItem>
        <GalleryItem>
          <Figure>
            <a href="https://12go.onetogrowonpod.com/wp-content/uploads/2019/04/OTGO_LogoFinal-1-1024x1024.png">
              <img
                src="https://12go.onetogrowonpod.com/wp-content/uploads/2019/04/OTGO_LogoFinal-1-1024x1024.png"
                alt="The words One To Grow On with fruits and vegetables and a microphone"
              />
            </a>
            <Caption>One to Grow On podcast art</Caption>
          </Figure>
        </GalleryItem>
        <GalleryItem>
          <Figure>
            <a href="https://12go.onetogrowonpod.com/wp-content/uploads/2019/04/12GO_PatreonHeader_background-1-1024x256.png">
              <img
                src="https://12go.onetogrowonpod.com/wp-content/uploads/2019/04/12GO_PatreonHeader_background-1-1024x256.png"
                alt="Fruits and vegetables against a white background"
              />
            </a>
            <Caption>One to Grow On banner art</Caption>
          </Figure>
        </GalleryItem>
      </Gallery>
    </PageLayout>
  );
}

const Gallery = styled.ul.attrs(() => ({
  className: 'ul-gallery',
}))`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
`;

const GalleryItem = styled.li.attrs(() => ({
  className: 'li-gallery',
}))`
  width: calc((100% - 35px) / 3);
  margin-bottom: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Figure = styled.figure.attrs(() => ({
  className: 'gallery-figure',
}))`
  position: relative;
  height: 100%;
`;

const Caption = styled.figcaption.attrs(() => ({
  className: 'gallery-caption',
}))`
  padding: 10px 40px 10px 9px;
  color: ${colors.white};
  /* font-style: italic; */
  font-weight: bold;
  text-align: left;
  position: absolute;
  width: 100%;
  /* left: 50%; */
  /* top: 90%; */
  bottom: 4px;
  /* transform: translate(-50%, -50%); */
  background-color: ${colors.greenMedium}bb;
`;
