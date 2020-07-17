import React from "react";
import styled from "styled-components";

const Root = styled.p`
  font-size: 24px;
  background-color: #3aafa9;
  margin: 2px 20% 0 20%;
  font-size: 28px;
  color: #17252a;
  align-self: center;

  @media only screen and (max-width: 475px) {
    font-size: 18px;
    width: 100%;
    margin: 0;
    padding: 0 5px 0 5px;
  }
`;

const AboutMeBox = ({ children }) => {
  return <Root>{children}</Root>;
};

export default AboutMeBox;
