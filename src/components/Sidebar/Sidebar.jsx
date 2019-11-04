import React from 'react';
import styled from 'styled-components';

import SidebarImage from './SidebarImage';
import { breakpointsDown } from '../../constants/breakpoints';
import { colors } from '../../constants/colors';
import spacing from '../../constants/spacing';

export default () => {
  const min = 1;
  const max = 7;

  const imageNumbers = [];
  while (imageNumbers.length < 3) {
    const imageNumber = Math.floor(Math.random() * (max - min) + min);
    if (imageNumbers.indexOf(imageNumber) === -1) {
      imageNumbers.push(imageNumber);
    }
  }

  return (
    <Sidebar>
      <Divider />
      Special thanks to
      <PatronList>
        <li>- Lindsay</li>
        <li>- Vikram</li>
        <li>- Christopher</li>
        <li>- Mama Casey</li>
      </PatronList>
      <Divider />
      <StyledSidebarImage imageNumber={imageNumbers[0]} />
      <StyledSidebarImage imageNumber={imageNumbers[1]} />
      <StyledSidebarImage imageNumber={imageNumbers[2]} />
      <Divider />
    </Sidebar>
  );
};

const Sidebar = styled.div.attrs(() => ({
  className: 'sidebar',
}))`
  /* margin-top: 8rem; */
  font-size: 1.7rem;
  justify-self: self-end;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  width: 200px;
  align-self: flex-start;

  ${breakpointsDown.tablet} {
    font-size: 2rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
    align-self: start;
  }
`;

const PatronList = styled.ul.attrs(() => ({
  className: 'patron-list',
}))`
  list-style-type: none;
`;

const StyledSidebarImage = styled(SidebarImage).attrs(() => ({
  className: 'sidebar-image',
}))`
  width: 200px;
`;

const Divider = styled.hr`
  color: rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.2);
  margin: ${spacing(2)} 0;
  width: 220px;
  margin-left: -10px;
  height: 3px;

  ${breakpointsDown.tablet} {
    display: none;
  }
`;
