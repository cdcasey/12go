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
          <em>One to Grow On</em>&nbsp;is&nbsp;a podcast where we dig into
          questions about agriculture and try to understand how food production
          impacts us and our world.
        </p>

        <p>
          This podcast investigates diverse perspectives, concerns, and
          intersections in agriculture by illustrating the interconnectedness of
          food systems and thereby helping consumers put their in-store
          decisions in a greater context. Increasingly, consumers want more
          transparency from their food systems. However, without a basic
          vocabulary, transparency is difficult to interpret. This podcast aims
          to fill in a fundamental background of larger agricultural concepts,
          without relying on complex technical information. We are also
          fostering basic agricultural literacy to help listeners have more
          in-depth discussions about food systems. &nbsp;
        </p>

        <p>
          <em>One to Grow On</em> also examines different perspectives and
          stakeholders throughout food systems. By exploring viewpoints and
          relationships throughout the agricultural industry, this show
          illustrates the global nature of food and helps explain consequences,
          challenges, and the future potential of agriculture to consumers.
          Using these lenses, <em>One to Grow On</em> digs into the questions at
          the forefront of listeners’ minds. We hope to create a more informed
          consumer who is aware that there are no easy answers or singular
          truths in agriculture.
        </p>

        <p>
          <em>One&nbsp;to&nbsp;Grow&nbsp;On&nbsp;</em>is an older kid-friendly
          podcast that is safe and appropriate for listeners of all ages. There
          are a few clearly marked episodes that contain content that may not be
          suitable for all ages
        </p>
      </PostContent>
      <SectionTitle>Why We Do It </SectionTitle>
      <PostContent>
        <p>
          Throughout her five years in the industry, Hallie got used to getting
          questions about agriculture at parties or family events that were just
          agriculture 101. She turned to her best friend and dad, exasperated by
          the lack of any education (and absence of transparency) regarding
          agriculture. Together, they were driven to create media that seeks to
          bring about a higher level of agricultural literacy and food
          transparency.
        </p>

        <p>
          The food and fiber system affects everyone, yet there is little
          information about agriculture that is accessible to the average
          person. With <em>One to Grow On</em>, we aim to educate, to entertain
          and to communicate often unseen impacts of agriculture.
        </p>
      </PostContent>
      <SectionTitle>What Our Fans Say</SectionTitle>
      <PostContent>
        <p>
          <em>
            "These guys are so cute and fun to listen to! Hallie's joy for
            agriculture really comes through making it an engaging and
            fulfilling listen!"
          </em>
        </p>

        <p>
          <em>
            "It's like listening to a friend gush about what they're interested
            in."
          </em>
        </p>

        <p>
          <em>
            "As an 'Ag nerd', I'm really enjoying this show! Great information
            for anyone curious about the food system."
          </em>
        </p>

        <p>
          <em>
            "The conversation style and production value are really top notch,
            and I appreciate learning about all the science behind these
            important topics! I'm excited to keep listening."
          </em>
        </p>

        <p>
          <em>"If you eat food, listen to this podcast."</em>
        </p>
      </PostContent>
      <SectionTitle>What the Critics Say </SectionTitle>
      <PostContent>
        <p>
          One to Grow on was recently reviewed by Podcast Manic, you can{' '}
          <a href="http://podcastmaniac.com/podcast-review-one-to-grow-on/">
            check it out here
          </a>
          . We particularly liked this chunk:
        </p>

        <p>
          <em>
            "One to Grow On is fun and amusing. It’s also full of useful
            information that explains the world around us. Most importantly, it
            exposes me to concepts that I wouldn’t necessarily seek or learn
            about on my own (...) Check your preconceived notions at the door,
            give it a listen."
          </em>
        </p>
      </PostContent>

      <SectionTitle>Who We Are </SectionTitle>
      <PostContent>
        <p>
          <strong>Hallie Casey</strong>&nbsp;is a <em>One to Grow On</em> host
          and producer. She is a native Texan and passionate about agricultural
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
          <strong>Catherine Arjet</strong>&nbsp;is a <em>One to Grow On</em>{' '}
          producer. She is an avid supporter of new media and its role in public
          education. Catherine has written for a variety of publications such
          as&nbsp;<em>The Odysse</em>y and her college newspaper,&nbsp;
          <em>The Purple and White</em>, where she was the opinions editor. In
          addition to writing, Catherine is passionate about STEM education and
          volunteered with youth environmental service organization Discover
          Green for two years. She is a graduate of Millsaps College in Jackson,
          Mississippi where she double-majored in Global Business and English.
          She is currently pursuing a masters of Global Policy Studies at the
          University of Texas at Austin and works as a legal writer. In her
          spare time, Catherine enjoys bad crime shows and good coffee
        </p>

        <p>
          <strong>Chris Casey</strong>&nbsp;is a host of{' '}
          <em>One to Grow On.</em> A long-time lover of podcasts, he is thrilled
          to be learning about agriculture from his daughter along with the
          audience. Chris is a computer software engineer and semi-professional
          stage actor. Previously, he hosted the podcast&nbsp;
          <em>eBook Ninjas</em>. Chris lives in his hometown, Austin, Texas.
          When not podcasting, acting, or coding, Chris enjoys perfecting his
          smoked brisket recipe.
        </p>
      </PostContent>

      <SectionTitle>Where to Find Us</SectionTitle>
      <PostContent>
        <p>
          <em>One&nbsp;to&nbsp;Grow&nbsp;On&nbsp;</em>is released every other
          Tuesday on all podcasting platforms. If you're looking for us between
          episodes, check out @onetogrowonpod on instagram, twitter, and
          facebook. Media and business communications can be directed to
          onetogrowonmedia@gmail.com.
        </p>
      </PostContent>
      <SectionTitle>Gallery</SectionTitle>

      <Gallery>
        <li>
          <Figure>
            <a href="https://www.onetogrowonpod.com/wp-content/uploads/2018/09/12go-CA-bio-pic.jpeg">
              <img
                src="https://www.onetogrowonpod.com/wp-content/uploads/2018/09/12go-CA-bio-pic.jpeg"
                alt=""
                data-id="112"
                data-link="https://www.onetogrowonpod.com/about/12go-ca-bio-pic/"
              />
              <Caption>Catherine Arjet</Caption>
            </a>
          </Figure>
        </li>
        <li>
          <Figure>
            <img
              src="https://www.onetogrowonpod.com/wp-content/uploads/2018/09/IMG_5692_square-1024x1024.jpg"
              alt="brunette girl half smiles in front of trees"
              data-id="151"
              data-link="https://www.onetogrowonpod.com/about/img_5692_square/"
            />
            <Caption>Hallie Casey</Caption>
          </Figure>
        </li>
        <li>
          <Figure>
            <img
              src="https://www.onetogrowonpod.com/wp-content/uploads/2018/09/cdc.jpg"
              alt="Chris in a production of Taming of the Shrew."
              data-id="175"
              data-link="https://www.onetogrowonpod.com/about/cdc/"
            />
            <Caption>Chris Casey</Caption>
          </Figure>
        </li>
        <li>
          <Figure>
            <img
              src="https://www.onetogrowonpod.com/wp-content/uploads/2019/04/12GO_PatreonHeader_background-1-1024x256.png"
              alt=""
              data-id="658"
              data-link="https://www.onetogrowonpod.com/press/12go_patreonheader_background-2/"
            />
          </Figure>
        </li>
        <li>
          <Figure>
            <img
              src="https://www.onetogrowonpod.com/wp-content/uploads/2019/04/OTGO_LogoFinal-1-1024x1024.png"
              alt=""
              data-id="659"
              data-link="https://www.onetogrowonpod.com/press/otgo_logofinal-2/"
            />
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
