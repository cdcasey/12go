import React from 'react';
import styled from 'styled-components';

import SidebarImage from './SidebarImage';

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
      Special thanks to
      <PatronList>
        <li>- Lindsay</li>
        <li>- Vikram</li>
        <li>- Christopher</li>
        <li>- Mama Casey</li>
      </PatronList>
      <StyledSidebarImage imageNumber={imageNumbers[0]} />
      <StyledSidebarImage imageNumber={imageNumbers[1]} />
      <StyledSidebarImage imageNumber={imageNumbers[2]} />
    </Sidebar>
  );
};

const Sidebar = styled.div.attrs(() => ({
  className: 'sidebar',
}))`
  margin-top: 8rem;
  font-size: 1.7rem;
  justify-self: self-end;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  width: 200px;
`;

const PatronList = styled.ul.attrs(() => ({
  className: 'patron-list',
}))`
  list-style-type: none;
`;

const StyledSidebarImage = styled(SidebarImage).attrs(() => ({
  className: 'sidebar-image',
}))`
  /* width: 200px; */
`;
