import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  /* :root {
    --white: #444;
      --background: #252525;
      --modal-bg: rgba(37, 37, 37, 0.8);
      --gray-line: #777777;
      --box-shadow: none;
      --title: #dcdde0;
    --text: #b6b6b6;
    --text-highlight: #b3b9ff;
    --button-title: #dcdde0;
      --red: #e83f5b;
      --green: #4cd62b;
      --blue: #4953b8;
      --blue-dark: #424aa3;
      --blue-twitter: #F5FCFF;
      --blue-light: #1e7ba3;
  } */

  :root {
    --white: #fff;
    --background: #f2f3f5;
    --modal-bg: rgba(242, 243, 245, 0.8);
    --gray-line: #dcdde0;
    --box-shadow: #dcdde0;
    --text: #667;
    --text-highlight: #b3b9ff;
    --title: #2e384d;
    --button-title: #fff;
    --red: #e83f5b;
    --green: #4cd62b;
    --blue: #5965e0;
    --blue-dark: #4953b8;
    --blue-twitter: #2aa9e0;
    --blue-light: #F5FCFF;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    color: var(--text);
  }

  body, button, textarea, input {
    font: 400 1rem "Inter", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

