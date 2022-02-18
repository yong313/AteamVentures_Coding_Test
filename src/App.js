import React from "react";
import GlobalStyle from './shared/GlobalStyles';
import styled from "styled-components";
import Navigation from './components/Navigation';
import ConTentsOne from "./components/ContentsOne";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Container>
        <ConTentsOne />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding: 70px 11% 0 11%;
`

export default App;
