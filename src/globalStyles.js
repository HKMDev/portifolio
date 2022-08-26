import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}

html, body {
  height: 100%;
  scroll-behavior: smooth;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

:focus{
  outline: 0;
}

ul {
  list-style: none;
}

a{
  text-decoration: none;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

h3{
  text-transform: uppercase;
  font-weight:700;
  text-align:center;
  padding-bottom: 2rem;
  color:#FF8C32;
}

#root, #__next {
  isolation: isolate;
  max-width:1600px;
  margin:0 auto;
}

.largura-strict{
    max-width:1250px;
    margin: 0 auto;    
}

.margin-section{
    margin-top:60px;
}
`;

export default GlobalStyle;
