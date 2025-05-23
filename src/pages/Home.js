import React, {useState} from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import ProfileImage from "../assets/backround-img.jpg";

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
`;

const SectionTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
  border-left: 4px solid #55efc4;;
  padding-left: 0.75rem;
  margin-top: 3.5rem;
`

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
  background-color: #ff9f43;
  border: none;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  color: #000;
  cursor: pointer;
  border-radius: 30px;
  font-weight: bold;

  &:hover {
    background-color: #ff7800;
  }
`;

const DownloadButton = styled.a`
  background-color: #55efc4;
  border: none;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  color: #000;
  cursor: pointer;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background-color: rgb(67, 198, 161);
    color: white;
  }
`;

const EducationSection = styled.div`
  margin-top: 2rem;
`;

const EducationCard = styled.div`
  background-color:rgb(70, 123, 123);
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 1.25rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
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
  background-color: #ff9f43;
  padding: 1.5rem;
  border-radius: 12px;
  margin-top: 1rem;
  max-width: 500px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
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
  const [showContact, setShowContact] = useState(false);

  const handleHireMeClick = () => {
    setShowContact((prev) => !prev);
  };

  return (
    <AppContainer>
      <Navbar />
      <HeroSection>
        <TextContainer>
          <SectionTitle>About Me</SectionTitle>
          <AboutText>
            I am a Full-Stack Developer with over 2 years of professional experience in Silicon Valley,
            where I contributed to building scalable and user-centric web applications. Currently, I am
            pursuing a Master's degree in Data Science and Machine Learning at Rice University. I have
            hands-on experience in both frontend and backend development, working with Java, JavaScript,
            React, Node.js, and SQL databases. I enjoy creating elegant, efficient software and I’m open
            to meaningful collaborations.
          </AboutText>

          <ButtonRow>
            <HireMeButton onClick={handleHireMeClick}>
              {showContact ? "Hide Contact ↑" : "Hire Me →"}
            </HireMeButton>
            <DownloadButton href="/assets/ElizaCV.pdf" download>
              Download Resume ↓
            </DownloadButton>
          </ButtonRow>

          {showContact && (
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
          )}

          <EducationSection>
            <SectionTitle>Education</SectionTitle>

            <EducationCard>
              <DegreeTitle>Master of Data Science and Machine Learning</DegreeTitle>
              <SchoolName>Rice University</SchoolName>
              <GraduationInfo>Graduating December 2025 · GPA: 3.89 / 4.00</GraduationInfo>
            </EducationCard>

            <EducationCard>
              <DegreeTitle>Bachelor of Computer Science</DegreeTitle>
              <SchoolName>Vistula University in Poland</SchoolName>
              <GraduationInfo>Graduated May 2022 · GPA: 3.39 / 4.0</GraduationInfo>
            </EducationCard>
          </EducationSection>
        </TextContainer>

        <ImageContainer>
          <ProfilePic src={ProfileImage} alt="Profile" />
        </ImageContainer>
      </HeroSection>
    </AppContainer>
  );
}

export default Home;
