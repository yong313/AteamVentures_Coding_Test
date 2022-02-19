import React from "react";
import GlobalStyle from './shared/GlobalStyles';
import styled from "styled-components";
import Navigation from './components/Navigation';
import ConTentsOne from "./components/ContentsOne";
import ContentsTwo from "./components/ContentsTwo";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Container>
        <ConTentsOne />
        <ContentsTwo />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1130px;
  height: auto;
  padding-bottom: 70px;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    padding: 0 5%;
    padding-bottom: 30px;
  }
`

export default App;
