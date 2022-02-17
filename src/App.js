import React from "react";
// 리셋 css
import GlobalStyle from './shared/GlobalStyles';
// 스타일 컴포넌트
import styled from "styled-components";
// components
import Navigation from './components/Navigation';
import ConTentOne from "./components/ContentsOne";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Container>
        <ConTentOne />
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
