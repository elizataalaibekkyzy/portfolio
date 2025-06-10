import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background:rgb(92, 92, 94);;
  color: #fff;
  text-align: center;
  padding: 2rem 0;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>© {new Date().getFullYear()} Eliza Taalaibek. All rights reserved.</FooterText>
    </FooterContainer>
  );
}

export default Footer;
