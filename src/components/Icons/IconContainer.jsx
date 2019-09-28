import React from 'react';
import styled from 'styled-components';

import Patreon from './Patreon';
import Envelope from './Envelope';
import Facebook from './Facebook';
import Twitter from './Twitter';
import Instagram from './Instagram';
import Android from './Android';
import ApplePodcasts from './ApplePodcasts';
import Stitcher from './Stitcher';
import Spotify from './Spotify';
import RSS from './RSS';
import { breakpointsDown } from '../../constants/breakpoints';

export default () => {
  return (
    <React.Fragment>
      <IconContainer>
        <IconLabel>Listen Now:</IconLabel>
        <IconGroup>
          <Android />
          <ApplePodcasts />
          <Stitcher />
          <Spotify />
          <RSS />
        </IconGroup>
      </IconContainer>
      <IconContainer>
        <IconLabel>Connect:</IconLabel>
        <IconGroup>
          <Instagram />
          <Twitter />
          <Facebook />
          <Envelope />
          <Patreon />
        </IconGroup>
      </IconContainer>
    </React.Fragment>
  );
};

const IconContainer = styled.div`
  margin-top: 1rem;
  display: flex;
`;

const IconLabel = styled.div`
  font-family: 'Lilita One';
  font-size: 2.5rem;
  text-align: right;
  flex: 1;
`;

const IconGroup = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-evenly;

  ${breakpointsDown.tablet} {
    flex: 4;
  }
`;
