import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import styles from './previewLink.module.scss';

export default ({ path, slug, title, date, excerpt, bgUrl }) => (
  <PreviewLink to={path}>
    <PreviewContainer
      key={slug}
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundColor: `rgba(74,136,22, 0.5)`,
        backgroundBlendMode: 'lighten',
      }}
    >
      <h3 dangerouslySetInnerHTML={{ __html: title }} />
      {date}
    </PreviewContainer>

    <div dangerouslySetInnerHTML={{ __html: excerpt }} />
  </PreviewLink>
);

const PreviewLink = styled(Link)`
  text-decoration: none;
  color: $color-black;
  margin-bottom: 5rem;
  width: 300px;
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;

  padding: 1rem;

  text-align: center;
  font-family: 'Lilita One';
  color: white;

  & h3 {
    font-size: 2.5rem;
  }

  &:hover {
    color: $color-orange-light;
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(60, 155, 160, 0.14),
      0px 2px 10px -1px rgba(60, 155, 160, 0.12);
  }
`;
