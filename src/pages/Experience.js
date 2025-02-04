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
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 3rem;
`;

const WorkList = styled.ul`
  font-size: 1rem;
  line-height: 1.6;
  color: #ffffff;
  list-style-type: disc;
  padding-left: 20px;
`;

const StyledLink = styled.a`
  color: #ff9f43;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

function Experience() {
    return (
      <AppContainer>
        <Navbar />
        <HeroSection>
          <TextContainer>
            <Title>Work Experience</Title>
            <strong>
              Full Stack Developer - <StyledLink href="https://www.rice.edu" target="_blank">Rice University</StyledLink> (Jan 2025 - Present)
            </strong>
            <WorkList>
              <li>Developed the "Rooms" website from scratch, improving user experience by 60% using JavaScript, React, Python, and SQL.</li>
            </WorkList>
            
            <strong>
              Full Stack Engineer - <StyledLink href="https://loopup.com" target="_blank">LoopUp LLC</StyledLink> (Sep 2022 - Aug 2024)
            </strong>
            <WorkList>
              <li>Integrated the "Operator Connect" project interface, increasing company revenue by $20 million using JavaScript and C#.</li>
              <li>Developed an alternate signer functionality for DocuSign, improving user efficiency by 100% with TypeScript and React.</li>
              <li>Mentored 3 interns, achieving a 100% project completion rate.</li>
            </WorkList>
            
            <strong>
              Software Engineer Intern - <StyledLink href="https://matriq.ch" target="_blank">matriq AG</StyledLink> (Jun 2021 - Nov 2021)
            </strong>
            <WorkList>
              <li>Created a data tracking tool in Python, cutting report generation time by 50%.</li>
              <li>Optimized internal testing tools, improving efficiency by 50%.</li>
              <li>Enhanced the front-end using QT, Python, and TypeScript, ensuring 90% accuracy in functionality control.</li>
            </WorkList>
            
            <strong>
              Software Engineer Intern - <StyledLink href="https://tink.com" target="_blank">Tink AB</StyledLink> (Jan 2021 - Apr 2021)
            </strong>
            <WorkList>
              <li>Developed a mobile banking app tracker using Spring Boot, automating workflows and reducing verification time by 50%.</li>
              <li>Led integration of the first UK-based bank application into Tink's platform, ensuring seamless domain functionality with Java.</li>
            </WorkList>
          </TextContainer>
          <ImageContainer>
            <ProfilePic src={ProfileImage} alt="Profile" />
          </ImageContainer>
        </HeroSection>
      </AppContainer>
    );
  }

  export default Experience;