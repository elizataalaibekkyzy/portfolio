import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { FaBriefcase } from "react-icons/fa";

const AppContainer = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: rgb(163, 162, 162);
  min-height: 100vh;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3rem;
`;

const ContentWrapper = styled.div`
  width: 90%;
  max-width: 1000px;
  padding: 4rem 2rem 2rem;
`;

const SectionTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
  border-left: 4px solid #55efc4;;
  padding-left: 0.75rem;
  margin-top: 3.5rem;
  margin-bottom: 2rem;
`


const ExperienceCard = styled.div`
  background-color:rgb(70, 123, 123);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
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
  return (
    <AppContainer>
      <Navbar />
      <ContentWrapper>
        <SectionTitle>Work Experience</SectionTitle>

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

      </ContentWrapper>
    </AppContainer>
  );
}

export default Experience;
