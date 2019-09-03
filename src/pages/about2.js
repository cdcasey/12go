import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout/layout';
import Image from '../components/image';
import styles from '../templates/post.module.scss';

const propTypes = {
  data: PropTypes.object.isRequired,
};

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <h1 className={styles.postTitle}>Meet the Team</h1>

      <p className={styles.postContent}>
        <img
          class="alignleft wp-image-151 size-medium"
          src="https://www.onetogrowonpod.com/wp-content/uploads/2018/09/IMG_5692_square-300x300.jpg"
          alt="brunette girl half smiles in front of trees"
          width="150"
          height="150"
        />
        <strong>Hallie Casey</strong> is a One to Grow On host and producer. She
        is a native Texan and passionate about agricultural sustainability and
        communication. Her love of science communication began at 12 when she
        co-founded Discover Green, a statewide non-profit focused on promoting
        youth leadership in environmental activism. She continued to work in
        science communication focused on agriculture and plant science,
        primarily through work in online video. Hallie got a bachelor’s in
        agribusiness from Texas State University and a master’s in International
        Agricultural Development at the University of California, Davis. She now
        lives in New Mexico where she works as the Horticulture Extension
        Manager at Navajo Technical University. While not working, she enjoys
        gardening, swing dancing, and culinary experiments.
      </p>
      <br style={{ clear: 'both' }} />
      <img
        class="alignleft wp-image-112 size-medium"
        src="https://www.onetogrowonpod.com/wp-content/uploads/2018/09/12go-CA-bio-pic-300x300.jpeg"
        alt=""
        width="300"
        height="300"
      />
      <p className={styles.postContent}>
        <strong>Catherine Arjet</strong> is a One to Grow On producer.She is an
        avid supporter of new media and its role in public education.Catherine
        has written for a variety of publications such as <i>The Odyssey</i> and
        her college newspaper, <i>The Purple and White</i>, where she was the
        opinions editor.In addition to writing, Catherine is passionate about
        STEM education and volunteered with Discover Green for two years.She is
        a graduate of Millsaps College in Jackson, Mississippi where she double
        - majored in Global Business and English.Catherine is originally from
        Austin, Texas and currently lives in Chicago, Illinois where she works
        as a legal writer.In her spare time, Catherine enjoys bad crime shows
        and good coffee.
        <br style={{ clear: 'both' }} />
      </p>
      <p className={styles.postContent}>
        <img
          class="alignleft wp-image-175 size-medium"
          src="https://www.onetogrowonpod.com/wp-content/uploads/2018/09/cdc-300x300.jpg"
          alt="Chris popping out of a window in a production of Taming of the Shrew"
          width="300"
          height="300"
        />
        <strong>Chris Casey</strong> is a host of One to Grow On. A long-time
        lover of podcasts, he is thrilled to be learning about agriculture from
        his daughter along with the audience. Chris is a computer software
        engineer and semi-professional stage actor. Previously, he hosted the
        podcast <i>eBook Ninjas</i>. Chris lives in his hometown, Austin,
        Texas.When not podcasting, acting, or coding, Chris enjoys perfecting
        his smoked brisket recipe.
      </p>
      <h1
        className={styles.postTitle}
        style={{ textAlign: 'left', clear: 'both' }}
      >
        Our Story
      </h1>
      {/* [caption id = "attachment_113" align = "alignright" width = "300"]  */}
      <img
        class="wp-image-113 size-medium"
        src="https://www.onetogrowonpod.com/wp-content/uploads/2018/09/WhatsApp-Image-2018-09-29-at-6.08.09-PM-300x292.jpeg"
        alt="two girls making faces in the back seat of a car"
        width="300"
        height="292"
      />
      <caption>Catherine and Hallie, March of 2009</caption>
      <p style={{ textAlign: 'left' }}>
        Throughout her six years in the industry, friends, family and virtual
        strangers alike have repeatedly asked Hallie the same few questions
        about agriculture.This experience, plus her work with multiple science
        education non - profits, led her to recognize that there wasn't a lot of
        basic agricultural and plant science education available to the general
        public. A podcast seemed like the perfect way to fix this.
      </p>
      <p>
        So, she called Catherine, her long - time best friend, and couldn't stop
        talking about the idea. Catherine was immediately on-board and they
        began scheming.
      </p>
      {/* [caption id = "attachment_173" align = "alignleft" width = "287"] */}
      <img
        class="wp-image-173 size-medium"
        src="https://www.onetogrowonpod.com/wp-content/uploads/2018/09/12go-e1539314987888-287x300.jpeg"
        alt="A young Hallie sits in Chris's lap while they both wear Troy Aikman jerseys"
        width="287"
        height="300"
      />
      <caption>Chris and Hallie, January 1997.</caption>
      <p>
        After months of planning, research, and administrative tasks, the next
        step was finding a co - host.They were nervous that they wouldn't find
        someone else who was as interested in the topic and excited to learn
        about it, but after Hallie got into a long conversation with her dad
        about the "organic" and "natural" labels, it was obvious he was the
        perfect choice.
      </p>
      <p>
        After that, it was time to get this show on the road, or, in this case,
        on the internet.After recording, editing, re - recording, getting
        feedback, and re - recording(again) we were able to launch One to Grow
        On.This is a podcast almost a year in the making and we hope you have as
        much fun listening to it as we had making it! <br />
        <br style={{ clear: 'both' }} />
      </p>
    </Layout>
  );
};

AboutPage.propTypes = propTypes;

export default AboutPage;
