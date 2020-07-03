import React from 'react';

import SEO from '../components/SEO';
import PageLayout from '../components/Layout/PageLayout';
import {
  PostContent,
  PostTitle,
  SectionTitle,
  Clear,
} from '../components/PageStyles';

export default function UnstyledPageLayout() {
  return (
    <PageLayout>
      <SEO title="About" />
      <PostTitle>About</PostTitle>
      <PostContent>
        <p>
          <i>One to Grow On</i> is a podcast where we dig into questions about
          agriculture and try to understand how food production impacts us and
          our world. Each episode, hosts Hallie and Chris pick an area of
          agriculture or food production to discuss. Listen for plant facts, dad
          jokes, and the stories behind your food.
        </p>
        <p>
          <em>One to Grow On</em> is an older kid-friendly podcast that is safe
          and appropriate for listeners of all ages. There are a few clearly
          marked episodes that contain content that may not be suitable for all
          ages.
        </p>
      </PostContent>
      <SectionTitle>Meet the Team</SectionTitle>
      <PostContent>
        <figure>
          <img
            src="https://12go.onetogrowonpod.com/wp-content/uploads/2018/09/IMG_5692_square-300x300.jpg"
            alt="brunette girl half smiles in front of trees"
          />
        </figure>
        <p>
          <strong>Hallie Casey</strong> is a <i>One to Grow On</i> host and
          producer. She is a native Texan and passionate about agricultural
          sustainability and communication. Her love of science communication
          began at 12 when she co-founded Discover Green, a statewide non-profit
          focused on promoting youth leadership in environmental activism. She
          continued to work in science communication focused on agriculture and
          plant science. Hallie got a bachelor’s in agribusiness from Texas
          State University and a master’s in International Agricultural
          Development at the University of California, Davis. She now lives in
          Austin, Texas where she works on local supply chain and value chain
          coordination at the Sustainable Food Center. While not working, she
          enjoys gardening, swing dancing, and culinary experiments.
        </p>
      </PostContent>
      <Clear />
      <PostContent>
        <figure>
          <img
            src="https://12go.onetogrowonpod.com/wp-content/uploads/2018/09/cdc-300x300.jpg"
            alt="Chris popping out of a window in a production of Taming of the Shrew"
          />
        </figure>
        <p>
          <strong>Chris Casey</strong> is a host of <i>One to Grow On</i>. A
          long-time lover of podcasts, he is thrilled to be learning about
          agriculture from his daughter along with the audience. Chris is a
          computer software engineer and semi-professional stage actor.
          Previously, he hosted the podcast <i>eBook Ninjas</i>. Chris lives in
          his hometown, Austin, Texas.When not podcasting, acting, or coding,
          Chris enjoys perfecting his smoked brisket recipe.
        </p>
      </PostContent>
      <Clear />
      <SectionTitle>Our Story</SectionTitle>
      <PostContent>
        <figure>
          <img
            src="https://12go.onetogrowonpod.com/wp-content/uploads/2018/09/WhatsApp-Image-2018-09-29-at-6.08.09-PM-300x292.jpeg"
            alt="two girls making faces in the back seat of a car"
          />
          <figcaption>Catherine and Hallie, March of 2009</figcaption>
        </figure>
        <p>
          Throughout her six years in the industry, friends, family and virtual
          strangers alike have repeatedly asked Hallie the same few questions
          about agriculture.This experience, plus her work with multiple science
          education non-profits, led her to recognize that there wasn’t a lot of
          basic agricultural and plant science education available to the
          general public. A podcast seemed like the perfect way to fix this.
        </p>
        <p>
          So, she called Catherine, her long-time best friend, and couldn’t stop
          talking about the idea. Catherine was immediately on-board and they
          began scheming.
        </p>
      </PostContent>
      <Clear />
      <PostContent>
        <figure>
          <img
            src="https://12go.onetogrowonpod.com/wp-content/uploads/2018/09/12go-e1539314987888-287x300.jpeg"
            alt="A young Hallie sits in Chris's lap while they both wear Troy Aikman jerseys"
          />
          <figcaption>Chris and Hallie, January 1997.</figcaption>
        </figure>
        <p>
          After months of planning, research, and administrative tasks, the next
          step was finding a co-host.They were nervous that they wouldn’t find
          someone else who was as interested in the topic and excited to learn
          about it, but after Hallie got into a long conversation with her dad
          about the “organic” and “natural” labels, it was obvious he was the
          perfect choice.
        </p>
        <p>
          After that, it was time to get this show on the road, or, in this
          case, on the internet. After recording, editing, re-recording, getting
          feedback, and re-recording (again) we were able to launch One to Grow
          On.This is a podcast almost a year in the making and we hope you have
          as much fun listening to it as we had making it!
        </p>
      </PostContent>
    </PageLayout>
  );
}
