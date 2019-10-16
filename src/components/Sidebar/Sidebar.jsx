import React from 'react';
import styled from 'styled-components';

import SidebarImage from './SidebarImage';

export default () => {
  // var arr = [];
  // while (arr.length < 8) {
  //   var r = Math.floor(Math.random() * 100) + 1;
  //   if (arr.indexOf(r) === -1) arr.push(r);
  // }
  // document.write(arr);

  function randomExcluded(min, max, excluded = max + 1) {
    max = excluded > max ? max : max - 1;
    var n = Math.floor(Math.random() * (max - min) + min);
    if (n >= excluded) n++;
    return n;
  }

  const min = 1;
  const max = 7;

  const imageNum1 = randomExcluded(min, max);
  const imageNum2 = randomExcluded(min, max, imageNum1);

  return (
    <Sidebar>
      Special thanks to
      <br />
      <br />
      <PatronList>
        <li>- Lindsay</li>
        <li>- Vikram</li>
        <li>- Christopher</li>
        <li>- Mama Casey</li>
      </PatronList>
      <StyledSidebarImage imageNumber={imageNum1} />
      <StyledSidebarImage imageNumber={imageNum2} />
    </Sidebar>
  );
};

const Sidebar = styled.div.attrs(() => ({
  className: 'sidebar',
}))`
  margin-top: 8rem;
  font-size: 1.7rem;
  justify-self: self-end;
`;

const PatronList = styled.ul.attrs(() => ({
  className: 'patron-list',
}))`
  list-style-type: none;
`;

const StyledSidebarImage = styled(SidebarImage).attrs(() => ({
  className: 'sidebar-image',
}))`
  margin-top: 1rem;
  width: 200px;
`;
