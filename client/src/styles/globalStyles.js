import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Ink Free";
    src: url('../fonts/Ink-Free-Font/Inkfree.ttf');
  }

  :root {
    --bg: #031b46;
    --bg2: #0b347a;
    --bdr: #062862;
    --hvr: #124395;
    --fg: #f5f5f5;
  }

  body {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background:
      linear-gradient(
        145deg,
        var(--bg),
        var(--bg2),
        var(--bg)
      );
    font-family: "Ink Free";
  }
`;

export default GlobalStyle;
