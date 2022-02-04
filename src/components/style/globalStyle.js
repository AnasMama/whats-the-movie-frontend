import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    -moz-box-sizing: border-box;
    box-sizing: border-box;}
  html {
    height: 100%;
  }
  body {
    width: 100%;
    height: 100vh;
    position: relative;
    margin: auto;
    padding: 0;
    padding-bottom: 5rem;
    background-color: #1B1E22;
    background-image: url("/background-movie.png");
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Varela Round', sans-serif;
    font-size: 1.3em;
    color: #FFFCF9;
    font-weight: bold;
  }
  h1 {
    font-family: 'Roboto', bold;
    font-size: 36px;
    text-align: center;
    }
  h2 {
    font-size: 16px;
  }
  h3 {
    font-size: 14px;
    margin: 0 1em 1em;
  }
  p {
    font-size: 1.3em;
  }
  a {
    text-decoration: none;
    color: black;
  }
  
`;

export default GlobalStyle;