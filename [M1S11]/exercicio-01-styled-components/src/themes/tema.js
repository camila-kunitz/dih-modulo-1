import { createGlobalStyle } from 'styled-components';

export const temaDark = {
  backgroundColor1: 'black',
  backgroundColor2: '#404040',
  corPrimaria: 'white',
  corSecundaria: 'red',
};

export const temaLight = {
  backgroundColor1: 'white',
  backgroundColor2: '#C0C0C0',
  corPrimaria: 'black',
  corSecundaria: 'blue',
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: sans-serif;
  }

  body {
    background-color: ${(props) => props.theme.backgroundColor1}
  }
`;
