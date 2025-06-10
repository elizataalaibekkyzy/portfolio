import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Poppins", sans-serif;
    background: linear-gradient(135deg, #1e1e2f, #121218);
    color: #fff;
    overflow-x: hidden;
  }

  *::selection {
    background-color: #55efc4;
    color: #000;
  }
`;

export default GlobalStyle;
