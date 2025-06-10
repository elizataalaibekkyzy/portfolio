import React, {useState} from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import ProfileImage from "../assets/backround-img.jpg";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";

const AppContainer = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: rgb(163, 162, 162);
  min-height: 100vh;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  padding: 3rem 2rem;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
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
  max-width: 360px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  margin-top: 10rem;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.03) rotate(1deg);
  }
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


const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  color: #ffffff;
  max-width: 550px;
  margin-bottom: 2rem;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const HireMeButton = styled.button`
  background: rgba(85, 239, 196, 0.2);
  color: #ffffff;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid rgba(85, 239, 196, 0.5);
  border-radius: 30px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(85, 239, 196, 0.3);
    box-shadow: 0 0 20px rgba(85, 239, 196, 0.5);
    color: black;
  }
`;

const DownloadButton = styled.a`
  background: rgba(0, 206, 201, 0.2);
  color: #ffffff;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid rgba(0, 206, 201, 0.5);
  border-radius: 30px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 206, 201, 0.35);
    box-shadow: 0 0 20px rgba(0, 206, 201, 0.5);
    color: black;
  }
`;

const EducationSection = styled.div`
  margin-top: 2rem;
`;

const EducationCard = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 1.25rem;
  margin-bottom: 1.25rem;
`;

const DegreeTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
`;

const SchoolName = styled.p`
  font-size: 1rem;
  color: #cccccc;
  margin: 0.2rem 0;
`;

const GraduationInfo = styled.p`
  font-size: 0.9rem;
  color: #d9cece;
  margin: 0;
`;


const ContactCard = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 1.5rem;
  margin-top: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
`;

const Value = styled.span`
  color:rgb(240, 243, 242);
`;


function Home() {
  const { ref, visible } = useScrollReveal();
  const [showContact, setShowContact] = useState(false);

  const handleHireMeClick = () => {
    setShowContact((prev) => !prev);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <AppContainer>
      <Navbar />
      <HeroSection>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <TextContainer>
          <motion.div variants={itemVariants}>
            <SectionTitle>About Me</SectionTitle>
          </motion.div>

            <AboutText>
              I am a Full-Stack Developer with over 2 years of professional experience in Silicon Valley,
              where I contributed to building scalable and user-centric web applications. Currently, I am
              pursuing a Master's degree in Data Science and Machine Learning at Rice University. I have
              hands-on experience in both frontend and backend development, working with Java, JavaScript,
              React, Node.js, and SQL databases. I enjoy creating elegant, efficient software and I’m open
              to meaningful collaborations.
            </AboutText>

          <motion.div variants={itemVariants}>
          <ButtonRow>
            <HireMeButton onClick={handleHireMeClick}>
              {showContact ? "Hide Contact ↑" : "Hire Me →"}
            </HireMeButton>

           <DownloadButton href="/assets/ElizaCV.pdf" download>
              Download Resume ↓
            </DownloadButton>
          </ButtonRow>
          </motion.div>

          {showContact && (
             <motion.div variants={itemVariants}>
            <ContactCard>
              <ContactItem>
                <Label style={{ color: "#000"}}>📧 Email:</Label>
                <Value>
                  <a
                    href="mailto:eliza.taalaibek0@gmail.com"
                    style={{ color: "#000"}}
                  >
                    eliza.taalaibek0@gmail.com
                  </a>
                </Value>
              </ContactItem>
              <ContactItem>
                <Label style={{ color: "#000"}}>📞 Phone:</Label>
                <Value>
                  <a
                    href="tel:+14158089249"
                    style={{ color: "#000" }}
                  >
                    (415) 808-9249
                  </a>
                </Value>
              </ContactItem>
            </ContactCard>
            </motion.div>
          )}
          <></>
          <SectionWrapper ref={ref} className={`scroll-reveal ${visible ? "visible" : ""}`}>
          <EducationSection>
             <motion.div variants={itemVariants}>
            <SectionTitle>Education</SectionTitle>
            </motion.div>

          <motion.div variants={itemVariants}>
            <EducationCard>
              <DegreeTitle>Master of Data Science and Machine Learning</DegreeTitle>
              <SchoolName>Rice University</SchoolName>
              <GraduationInfo>Graduating December 2025 · GPA: 3.89 / 4.00</GraduationInfo>
            </EducationCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <EducationCard>
              <DegreeTitle>Bachelor of Computer Science</DegreeTitle>
              <SchoolName>Vistula University in Poland</SchoolName>
              <GraduationInfo>Graduated May 2022 · GPA: 3.39 / 4.0</GraduationInfo>
            </EducationCard>
          </motion.div>

          </EducationSection>
          </SectionWrapper>
        </TextContainer>
        </motion.div>

        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
        <ImageContainer>
          <ProfilePic src={ProfileImage} alt="Profile" />
        </ImageContainer>
        </motion.div>
        </motion.div>
      </HeroSection>
    </AppContainer>
  );
}

export default Home;
