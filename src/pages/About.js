import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ProfileImage from "../images/backround-img.jpg";

const AppContainer = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #1e1e1e;
  min-height: 100vh;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  padding: 40px;
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: left;
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
  color: #b0b0b0;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #ffffff;
`;

function About() {
    return (
      <AppContainer>
        <Navbar />
        <HeroSection>
          <TextContainer>
            <Title>About Me</Title>
            <AboutText>
              I am a Full-Stack Developer with a passion for building scalable web applications.
              With expertise in both frontend and backend technologies, I strive to create 
              efficient and elegant solutions. My experience includes working with Java, JavaScript, 
              React, Node.js, and SQL databases. I am open to new opportunities and collaborations.
            </AboutText>
          </TextContainer>
          <ImageContainer>
            <ProfilePic src={ProfileImage} alt="Profile" />
          </ImageContainer>
        </HeroSection>
      </AppContainer>
    )
}

export default About;