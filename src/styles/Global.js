import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  body {

    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */

    color: ${({ theme }) => theme.fg0};
    background-color: ${({ theme }) => theme.bg0};

    font-family: 'Share Tech Mono', monospace;
    // font-size: 1.2em;
    height: 100vh;
    padding: 0;
    margin: 0;
    transition: all 0.25s linear;

    text-align: justify;
  }

  a {
    color: ${({ theme }) => theme.ac1};
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }) => theme.ac2};
  }

  button {
    color: ${({ theme }) => theme.fg1};
    background-color: transparent;

    font-style: italic;

    border: none;
    padding: 5px;
    padding-bottom: 0;
  }

  button:hover {
    cursor: pointer;
  }

  li {
    list-style-type: none;
  }

  // Base colorschemes (add classes to components)
  .fg0 {
    color: ${({ theme }) => theme.fg0};
  }
  .fg1 {
    color: ${({ theme }) => theme.fg1};
  }
  .bg0 {
    background-color: ${({ theme }) => theme.bg0};
  }
  .bg1 {
    background-color: ${({ theme }) => theme.bg1};
  }
  .border-ac0 {
    border-color: ${({ theme }) => theme.ac0};
  }
  .border-ac1 {
    border-color: ${({ theme }) => theme.ac1};
  }
  .border-ac2 {
    border-color: ${({ theme }) => theme.ac2};
  }
  .ac0 {
    color: ${({ theme }) => theme.ac0};
  }
  .ac1 {
    color: ${({ theme }) => theme.ac1};
  }
  .ac2 {
    color: ${({ theme }) => theme.ac2};
  }
`