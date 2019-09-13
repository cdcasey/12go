import React from 'react';
import styled from 'styled-components';

export default () => {
  return (
    <Sidebar>
      Special thanks to
      <ul>
        <li>Andrew</li>
        <li>Christopher</li>
        <li>LD</li>
        <li>Lindsay</li>
        <li>Sarah</li>
        <li>Vikram</li>
      </ul>
    </Sidebar>
  );
};

const Sidebar = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 600px;
  padding-top: 13rem;
`;
