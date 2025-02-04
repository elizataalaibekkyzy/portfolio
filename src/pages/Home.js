import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import ProfileImage from "../images/backround-img.jpg";


const AppContainer = styled.div`
  font-family: "Poppins", sans-serif;
  background-color:rgb(163, 162, 162);
  min-height: 100vh;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 60rem;
`;

const TextContainer = styled.div`
  flex: 1;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const ProfilePic = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
  color:rgb(247, 243, 243);
`;

const HireMeButton = styled.button`
  background-color: #ff9f43;
  border: none;
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  color: #000;
  cursor: pointer;
  border-radius: 50px;
  font-weight: bold;

  &:hover {
    background-color: #ff7800;
  }
`;


function Home() {
    const handleHireMeClick = () => {
        window.location.href = "mailto:eliza.taalaibek0@gmail.com";
      };

    return (
    <AppContainer>
        <Navbar />
        <HeroSection>
            <TextContainer>
            <Title>Full-Stack Developer</Title>
            <Subtitle>OPEN TO WORK | Based in USA</Subtitle>
            <HireMeButton onClick={handleHireMeClick}>Hire Me →</HireMeButton>
            </TextContainer>
            <ImageContainer>
            <ProfilePic src={ProfileImage} alt="Profile" />
            </ImageContainer>
        </HeroSection>
    </AppContainer>
    );
  }
  
  export default Home;