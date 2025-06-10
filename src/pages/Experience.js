import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { FaBriefcase } from "react-icons/fa";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionWrapper from "../components/SectionWrapper";

const AppContainer = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: rgb(163, 162, 162);
  min-height: 100vh;
  color: #ffffff;
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
  padding: 0.75rem 1.25rem;
  margin-top: 3.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #55efc4;
  border-radius: 12px;
  background: rgba(85, 239, 196, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
`;



const ExperienceCard = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin-bottom: 1.25rem;
  padding: 1.25rem;
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  margin-top: 0.3rem;
`;

const ExperienceContent = styled.div`
  flex: 1;
`;

const Role = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
`;

const Company = styled.p`
  font-size: 1rem;
  color: #cccccc;
  margin: 0.2rem 0;
`;

const Dates = styled.p`
  font-size: 0.9rem;
  color: #d9cece;
  margin-bottom: 1rem;
`;

const BulletList = styled.ul`
  padding-left: 1.2rem;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  list-style: disc;
`;

function Experience() {

  const { ref, visible } = useScrollReveal();

  return (
    <AppContainer>
      <Navbar />
      <ContentWrapper>
        <SectionTitle>Work Experience</SectionTitle>
        <SectionWrapper ref={ref} className={`scroll-reveal ${visible ? "visible" : ""}`}>
        <ExperienceCard>
          <IconWrapper><FaBriefcase /></IconWrapper>
          <ExperienceContent>
            <Role>Full Stack Developer</Role>
            <Company>Rice University</Company>
            <Dates>January 2025 – Present</Dates>
            <BulletList>
              <li>Developed the "Rooms" website from scratch, improving user experience by 60% using JavaScript, React, Python, and SQL.</li>
              <li>Developed and deployed new features that achieved 100% accuracy in handling the website’s business logic.</li>
            </BulletList>
          </ExperienceContent>
        </ExperienceCard>

        <ExperienceCard>
          <IconWrapper><FaBriefcase /></IconWrapper>
          <ExperienceContent>
            <Role>Full Stack Engineer</Role>
            <Company>LoopUp LLC</Company>
            <Dates>September 2022 – August 2024</Dates>
            <BulletList>
              <li>Integrated the "Operator Connect" project interface, increasing company revenue by $20 million using JavaScript and C#.</li>
              <li>Developed an alternate signer functionality for DocuSign, improving user efficiency by 100% with TypeScript and React.</li>
              <li>Mentored 3 interns, achieving a 100% project completion rate.</li>
            </BulletList>
          </ExperienceContent>
        </ExperienceCard>

        <ExperienceCard>
          <IconWrapper><FaBriefcase /></IconWrapper>
          <ExperienceContent>
            <Role>Software Engineer Intern</Role>
            <Company>matriq AG</Company>
            <Dates>June 2021 – November 2021</Dates>
            <BulletList>
              <li>Created a data tracking tool in Python, cutting report generation time by 50%.</li>
              <li>Optimized internal testing tools, improving efficiency by 50%.</li>
              <li>Enhanced the front-end using QT, Python, and TypeScript, ensuring 90% accuracy in functionality control.</li>
            </BulletList>
          </ExperienceContent>
        </ExperienceCard>

        <ExperienceCard>
          <IconWrapper><FaBriefcase /></IconWrapper>
          <ExperienceContent>
            <Role>Software Engineer Intern</Role>
            <Company>Tink AB</Company>
            <Dates>January 2021 – April 2021</Dates>
            <BulletList>
              <li>Developed a mobile banking app tracker using Spring Boot, automating workflows and reducing verification time by 50%.</li>
              <li>Led integration of the first UK-based bank application into Tink's platform, ensuring seamless domain functionality with Java.</li>
            </BulletList>
          </ExperienceContent>
        </ExperienceCard>
        </SectionWrapper>
      </ContentWrapper>
    </AppContainer>
  );
}

export default Experience;
