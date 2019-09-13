import React from 'react';
import styled from 'styled-components';

export default () => {
  return (
    <Sidebar>
      Special thanks to
      <br />
      <br />
      <PatronList>
        <li>- Andrew</li>
        <li>- Christopher</li>
        <li>- LD</li>
        <li>- Lindsay</li>
        <li>- Sarah</li>
        <li>- Vikram</li>
      </PatronList>
      <MaybePicture />
      <MaybePicture />
    </Sidebar>
  );
};

const Sidebar = styled.div.attrs(() => ({
  className: 'sidebar',
}))`
  /* border: 1px solid black;
  width: 300px;
  height: 600px; */
  padding-top: 10rem;
  font-size: 1.7rem;
  justify-self: self-end;
`;

const PatronList = styled.ul.attrs(() => ({
  className: 'patron-list',
}))`
  list-style-type: none;
`;

const MaybePicture = styled.div`
  border: 1px solid black;
  margin-top: 1rem;
  width: 200px;
  height: 200px;
`;
