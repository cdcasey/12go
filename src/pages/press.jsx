import React from 'react';
import styled from 'styled-components';

import SEO from '../components/SEO';
import PageLayout from '../components/Layout/PageLayout';
import { PostContent, PostTitle, SectionTitle } from '../components/PageStyles';
import { colors } from '../constants/colors';

export default function() {
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

      <iframe
        title="promo"
        src="https://player.blubrry.com/id/38233218/"
        scrolling="no"
        width="100%"
        height="138px"
        frameborder="0"
      ></iframe>

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
          <strong>Catherine Arjet</strong> is a <em>One to Grow On</em>{' '}
          producer. She is an avid supporter of new media and its role in public
          education. Catherine has written for a variety of publications such as{' '}
          <em>The Odyssey</em> and her college newspaper,{' '}
          <em>The Purple and White</em>, where she was the opinions editor. In
          addition to writing, Catherine is passionate about STEM education and
          volunteered with youth environmental service organization Discover
          Green for two years. She is a graduate of Millsaps College in Jackson,
          Mississippi where she double-majored in Global Business and English.
          She is currently pursuing a masters of Global Policy Studies at the
          University of Texas at Austin and works as a legal writer. In her
          spare time, Catherine enjoys bad crime shows and good coffee.{' '}
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
        <li>
          <Figure>
            <a href="https://12go.onetogrowonpod.com/wp-content/uploads/2018/09/12go-CA-bio-pic.jpeg">
              <img
                src="https://12go.onetogrowonpod.com/wp-content/uploads/2018/09/12go-CA-bio-pic.jpeg"
                alt="woman standing and smiling in front of leafy plants"
              />
            </a>
            <Caption>Catherine Arjet</Caption>
          </Figure>
        </li>
        <li>
          <Figure>
            <a href="https://12go.onetogrowonpod.com/wp-content/uploads/2018/09/IMG_5692_square-1024x1024.jpg">
              <img
                src="https://12go.onetogrowonpod.com/wp-content/uploads/2018/09/IMG_5692_square-1024x1024.jpg"
                alt="brunette girl half smiles in front of trees"
              />
            </a>
            <Caption>Hallie Casey</Caption>
          </Figure>
        </li>
        <li>
          <Figure>
            <a href="https://12go.onetogrowonpod.com/wp-content/uploads/2018/09/cdc.jpg">
              <img
                src="https://12go.onetogrowonpod.com/wp-content/uploads/2018/09/cdc.jpg"
                alt="Man in sunglasses holding a cigar and a drink and leaning out of a window"
              />
            </a>
            <Caption>Chris Casey</Caption>
          </Figure>
        </li>
        <li>
          <Figure>
            <a href="https://12go.onetogrowonpod.com/wp-content/uploads/2019/03/IMG_4016.jpg">
              <img
                src="https://12go.onetogrowonpod.com/wp-content/uploads/2019/03/IMG_4016.jpg"
                alt="A man and two women smiling at the camera"
              />
            </a>
            <Caption>Catherine Arjet, Chris Casey, Hallie Casey</Caption>
          </Figure>
        </li>
        <li>
          <Figure>
            <a href="https://12go.onetogrowonpod.com/wp-content/uploads/2019/04/12GO_PatreonHeader_background-1-1024x256.png">
              <img
                src="https://12go.onetogrowonpod.com/wp-content/uploads/2019/04/12GO_PatreonHeader_background-1-1024x256.png"
                alt="Fruits and vegetables against a white background"
              />
            </a>
          </Figure>
        </li>
        <li>
          <Figure>
            <a href="https://12go.onetogrowonpod.com/wp-content/uploads/2019/04/OTGO_LogoFinal-1-1024x1024.png">
              <img
                src="https://12go.onetogrowonpod.com/wp-content/uploads/2019/04/OTGO_LogoFinal-1-1024x1024.png"
                alt="The words One To Grow On with fruits and vegetables and a microphone"
              />
            </a>
          </Figure>
        </li>
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

  li {
    width: calc((100% - 32px) / 2);
  }

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
  font-style: italic;
  font-weight: bold;
  text-align: center;
  position: absolute;
  width: 100%;
  /* left: 50%; */
  /* top: 90%; */
  bottom: 4px;
  /* transform: translate(-50%, -50%); */
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.3) 70%,
    transparent
  );
`;
