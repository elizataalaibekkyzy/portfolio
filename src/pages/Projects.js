import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const AppContainer = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: rgb(163, 162, 162);
  min-height: 100vh;
  color: #ffffff;
  padding-bottom: 3rem;
`;

const PageContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background-color: rgb(70, 123, 123);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ProjectDuration = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #dddddd;
  margin-bottom: 1rem;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background-color: #0d5c5c;
  color: #ffffff;
  padding: 0.3rem 0.75rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ActionButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background-color: transparent;
  color: #ffffff;
  font-size: 0.9rem;
  border: 1px solid #55efc4;
  border-radius: 25px;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: 0.2s ease;

  &:hover {
    background-color: #55efc4;
    color: #000;
  }
`;

const projects = [
  {
    title: "Critics and User-Based Movie Recommendation System Using BERT Embeddings",
    duration: "(Feb 2025 – Apr 2025)",
    description: `Built a content-based movie recommendation system leveraging BERT embeddings to encode movie metadata into a semantic vector space. Developed multiple similarity-based models (cosine, transformer, autoencoder, GNN) to recommend movies. Achieved significant performance improvements through optimization of embedding similarity and hybrid model fusion techniques.`,
    tags: ["Python", "Pandas", "Scikit-Learn", "Transformers", "BERT", "TensorFlow"],
    buttons: [{ label: "View Project", icon: <FiExternalLink />, url: "https://drive.google.com/drive/folders/1eX54Ca-HD2WB9xBSId3VUEuw8m0WlUfE?usp=sharing" }]
  },
  {
    title: "Medical Image Report Generation (Deep learning Vision and Language Course project)",
    duration: "(Feb 2025 – Apr 2025)",
    description: `Developed a multimodal AI system for lung cancer classification by integrating a CNN-based vision model (ResNet50) with a logistic regression-based NLP model. The system analyzed chest X-rays and extracted symptoms from synthetic clinical notes to predict diagnostic categories: Benign, Malignant, or Normal. Achieved up to 76% accuracy using vision data and improved model robustness through data augmentation and class balancing techniques.`,
    tags: ["Python", "Logistic Regression", "Scikit-Learn", "Neural Networks", "Transformers", "TensorFlow", "ResNet50"],
    buttons: [{ label: "View Project", icon: <FiExternalLink />, url: "https://drive.google.com/drive/folders/1eX54Ca-HD2WB9xBSId3VUEuw8m0WlUfE?usp=sharing" }]
  },
  {
    title: "Facial emotions recognition",
    duration: "(Dec 2022 – Feb 2024)",
    description: `Designed and implemented a machine learning project using Keras to classify seven basic human emotions (e.g., happiness, sadness, anger, fear, surprise, disgust, and neutrality) from facial expressions. Built and trained a convolutional neural network (CNN) on a labeled image dataset, achieving 90% classification accuracy. Preprocessed the data with techniques such as normalization and augmentation to enhance model generalization. Evaluated performance using accuracy metrics and confusion matrix, and optimized the model using dropout layers and fine-tuning.

.`,
    tags: ["Python", "Data Analysis", "Keras", "TensorFlow"],
    buttons: [
      { label: "GitHub", icon: <FaGithub />, url: "https://github.com/elizataalaibekkyzy/eliza/tree/start" },
    ]
  }
];

function Projects() {
  return (
    <AppContainer>
      <Navbar />
      <PageContent>
        <SectionTitle>Projects</SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <div>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDuration>{project.duration}</ProjectDuration>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TagList>
                  {project.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <ButtonRow>
                {project.buttons.map((btn, i) => (
                  <ActionButton key={i} href={btn.url} target="_blank" rel="noopener noreferrer">
                    {btn.icon} {btn.label}
                  </ActionButton>
                ))}
              </ButtonRow>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </PageContent>
    </AppContainer>
  );
}

export default Projects;
