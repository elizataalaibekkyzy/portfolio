import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AppBar, Box } from "@mui/material";

const Nav = styled(AppBar)`
  width: 100%;
  background: rgb(72, 71, 71) !important;
`;

const Logo = styled.h1`
  margin-left: 2rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: #ffffff;
`;

const NavLinks = styled.div`
  justify-content: space-between;
  margin-top: 1.6rem;
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 500;

    &:hover {
      color: #ff9f43;
    }

    &.active {
      text-decoration: underline;
      color: #ff9f43;
    }
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
      color: #ff9f43;
    }
  }
`;

function Navbar() {
  return (
    <Nav position="absolute">
        <Box display="flex" justifyContent="space-between" justifyItems="center">
            <Logo>Eliza Taalaibek</Logo>
            <NavLinks>
                <NavLink to="/">Bio</NavLink>
                <NavLink to="/experience">Experience</NavLink>
                <NavLink to="/projects">Projects</NavLink>
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
