import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';
import { Normalize } from 'styled-normalize';
import fontFaces from '../fonts/fontSetup';

const GlobalStyle = createGlobalStyle`
${fontFaces}
  body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background-color: #f1f2f6;
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  font-size: 24px;
}
`;

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Container>
        <h1>Hello There</h1>
        <p>General Kenobi!</p>
        <p>{count}</p>
        <button type="button" onClick={() => setCount(count + 1)}>
          Click me!
        </button>
      </Container>
    </>
  );
};
export default App;
