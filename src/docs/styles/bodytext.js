import { css } from 'emotion';

const bodytextStyle = css`
  margin-bottom: 50px;
  min-height: 40vh;

  & .gatsby-resp-image-wrapper {
    margin: 2em 0;
  }

  p {
    line-height: 1.6;
    margin: 0 0 1.5em;
    font-size: 1em;
  }

  strong {
    letter-spacing: -0.02em;
  }

  ul {
    margin: 0 0 1.5em;
    list-style: none;
  }

  li {
    margin: 0.8em 0;
    line-height: 1.4;
    padding: 0 5px 0 20px;
    position: relative;

    &:before {
      content: '';
      width: 4px;
      height: 4px;
      background: var(--firstActiveColor);
      position: absolute;
      top: 0.45em;
      left: 1px;
    }
  }

  h2,
  h3 {
    line-height: 1.2;
    margin: 1.8em 0 1em;
    letter-spacing: -0.03em;
    display: flex;
  }

  h2 {
    font-size: 1.6em;
  }

  h3 {
    font-size: 1.3em;
  }

  .anchor {
    margin-left: -20px;
    float: none;
    width: 20px;
    display: flex;
    align-items: center;
  }

  pre {
    margin: 0 0 1.5em;
  }

  blockquote {
    background: #f9f9f9;
    padding: 20px 20px 20px 30px;
    border-left: 5px solid #ddd;
    font-style: italic;

    & p:last-child {
      margin-bottom: 0;
    }
  }
`;

export default bodytextStyle;
