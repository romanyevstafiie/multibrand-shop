import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: color 0.3s ease-out;
}

 body {
    font-family: 'Roboto Condensed','sans-serif';
    color: #ffffff;
    background: #000000;
    line-height: 1.4;
    font-size: 1rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
}

strong{
 
}

ul {
  list-style-type: none;
}

a {
  
  text-decoration: none;
  
}

img {
  width: 100%;
  display: block;
}

input {
  ::placeholder {
    font-family:'Roboto Condensed','sans-serif';
  }
}

button {
  font-family: inherit;
}

::-webkit-scrollbar {
  width:5px;
  
}
::-webkit-scrollbar-track {
  background: rgba(255,255,255,0); 
  
}
::-webkit-scrollbar-thumb {
  background:#ffc130;
}
 `;
