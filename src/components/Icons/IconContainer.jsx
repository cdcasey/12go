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
    <IconGrid>
      <IconContainer className="listen">
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
        <IconLabel className="connect">Connect:</IconLabel>
        <IconGroup>
          <Instagram />
          <Twitter />
          <Facebook />
          <Envelope />
          <Patreon />
        </IconGroup>
      </IconContainer>
    </IconGrid>
  );
};

const IconGrid = styled.div`
  display: grid;
  /* grid-template-columns: 1fr; */
  grid-template-areas:
    'listen'
    'connect';

  ${breakpointsDown.tablet} {
    grid-template-areas: 'connect listen';
    justify-content: space-evenly;
  }
`;

const IconContainer = styled.div`
  margin-top: 1rem;
  display: flex;

  &.listen {
    grid-area: listen;
  }
  &.connect {
    grid-area: connect;
  }

  ${breakpointsDown.tablet} {
    flex-direction: column;
  }
`;

const IconLabel = styled.div`
  font-family: 'Lilita One';
  font-size: 2.5rem;
  text-align: right;
  flex: 1;

  ${breakpointsDown.tablet} {
    text-align: left;
  }
`;

const IconGroup = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-evenly;

  ${breakpointsDown.tablet} {
    flex: unset;
    display: unset;
    justify-content: unset;

    & > * {
      margin-right: 8px;
    }
  }
`;
