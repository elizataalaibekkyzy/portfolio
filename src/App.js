import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyle"
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import styled from "styled-components";

const AppContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;

const SnapSection = styled.section`
  scroll-snap-align: start;
`;

function App() {
  return (
    <>
    <GlobalStyle />
    <AppContainer>
      <Navbar />
        <SnapSection id="home"><Home /></SnapSection>
        <SnapSection id="experience"><Experience /></SnapSection>
        <SnapSection id="projects"><Projects /></SnapSection>
      <Footer />
    </AppContainer>
    </>
  );
}

export default App;
