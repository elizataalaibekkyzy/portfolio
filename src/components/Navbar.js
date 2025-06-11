import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AppBar, Box } from "@mui/material";
import useActiveSection from "../hooks/useActiveSection"; // Make sure this file exists

const sectionIds = ["home", "experience", "projects"];

const Nav = styled(AppBar)`
  background: rgba(255, 255, 255, 0.08) !important;
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
`;

const Logo = styled.h1`
  margin-left: 2rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: #ffffff;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.ul`
  justify-content: space-between;
  margin-top: 1.6rem;
  display: flex;
  gap: 2rem;
  list-style: none;

  a {
    position: relative;
    text-decoration: none;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 500;
    transition: color 0.3s ease;
    
    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, #55efc4, #00cec9);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scaleX(1);
    }

    &:hover {
      color: #55efc4;
    }
  }

  .active a {
    color: #55efc4;

    &::after {
      transform: scaleX(1);
    }
  }
`;


const NavItem = styled.li`
  &:hover {
    transform: scale(1.05);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.6rem;
  margin-right: 2rem;

  a {
    color: #ffffff;
    font-size: 1.5rem;
    transition: 0.3s;

    &:hover {
      color: #55efc4;
      transform: scale(1.5);
    }
  }
`;

function Navbar() {
  const activeSection = useActiveSection(sectionIds);

  return (
    <Nav>
      <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
        <Logo>Eliza Taalaibek</Logo>
        <NavLinks>
          {sectionIds.map((id) => (
            <NavItem key={id} className={activeSection === id ? "active" : ""}>
              <a href={`#${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
            </NavItem>
          ))}
        </NavLinks>
        <SocialIcons>
          <a href="https://linkedin.com/in/eliza-taalaibek" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/elizataalaibekkyzy" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </SocialIcons>
      </Box>
    </Nav>
  );
}

export default Navbar;
