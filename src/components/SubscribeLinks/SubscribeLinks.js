import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

export default () => (
  <ul
    style={{
      listStyleType: 'none',
      display: 'flex',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
    }}
  >
    <li>
      <OutboundLink href="http://subscribeonandroid.com/www.onetogrowonpod.com/feed/podcast">
        <img
          height="34"
          src="https://12go.onetogrowonpod.com/wp-content/uploads/2018/10/android.png"
          alt="Subscribe on Android"
          // style={{ border: 0 }}
        />
      </OutboundLink>
    </li>

    <li>
      <OutboundLink href="https://itunes.apple.com/us/podcast/coming-soon/id1437683662?i=1000420674402&mt=2&app=podcast">
        <img
          height="34"
          src="https://12go.onetogrowonpod.com/wp-content/uploads/2018/10/apple-podcast-lrg.png"
          alt="Listen on Apple Podcasts"
        />
      </OutboundLink>
    </li>

    <li>
      <OutboundLink href="https://open.spotify.com/show/2N8ibfalcLcqK5qVOD6WKI">
        <img
          src="https://12go.onetogrowonpod.com/wp-content/uploads/2019/04/spotify-podcast-badge-blk-grn-165x40.png"
          alt="Listen on Spotify"
          height="34"
        />
      </OutboundLink>
    </li>

    <li>
      <OutboundLink href="https://www.stitcher.com/s?fid=240925&refid=stpr">
        <img
          src="https://12go.onetogrowonpod.com/wp-content/uploads/2018/10/Stitcher_Listen_Badge_Color_Light_BG.png"
          height="34"
          alt="Listen on Stitcher"
        />
      </OutboundLink>
    </li>

    <li>
      <OutboundLink href="http://www.onetogrowonpod.com/feed/podcast">
        <img
          height="34"
          src="https://12go.onetogrowonpod.com/wp-content/uploads/2018/10/subscribe-rss.png"
          alt="Subscribe via RSS"
          // style={{ border: 0 }}
        />
      </OutboundLink>
    </li>

    <li>
      <OutboundLink href="https://www.patreon.com/bePatron?u=12543074">
        <img
          height="34"
          src="https://12go.onetogrowonpod.com/wp-content/uploads/2018/10/become_a_patron_button@2x.png"
          alt="Become a patron"
        />
      </OutboundLink>
    </li>
  </ul>
);
