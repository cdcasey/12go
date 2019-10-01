import styled from 'styled-components';

export const PostContent = styled.div.attrs(props => ({
  className: 'post-content',
}))`
  margin-top: 2rem;
  font-size: 1.7rem;

  p {
    margin-bottom: 1rem;
  }

  figure {
    float: left;
    margin: 5px 20px 5px 0;

    img {
      /* height: 300px; */
      width: 250px;
    }

    figcaption {
      font-style: italic;
    }
  }
`;

export const SectionTitle = styled.h2.attrs(props => ({
  className: 'section-title',
}))`
  margin-top: 4rem;
  font-size: 3rem;
  font-style: italic;
`;

export const PostTitle = styled.h1.attrs(props => ({
  className: 'post-title',
}))`
  font-size: 4rem;
  font-style: italic;
`;

export const Clear = styled.div`
  clear: both;
`;
