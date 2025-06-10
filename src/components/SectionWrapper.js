import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  &.scroll-reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  &.scroll-reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SectionWrapper = React.forwardRef((props, ref) => {
  return <StyledDiv ref={ref} {...props} />;
});

export default SectionWrapper;
