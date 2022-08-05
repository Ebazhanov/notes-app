import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body,
  .App {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    font-size: 16px;
    background: white;
  }

  .App {
    display: flex;
  }
`;

export default GlobalStyle;
