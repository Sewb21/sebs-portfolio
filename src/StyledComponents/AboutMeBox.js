import React from "react";
import styled from "styled-components";

const Root = styled.p`
  font-size: 24px;
  background-color: #3aafa9;
  height: 150px;
  margin: 2px 20% 0 20%;
  font-size: 28px;
  color: #17252a;
`;

const AboutMeBox = ({ children }) => {
  return <Root>{children}</Root>;
};

export default AboutMeBox;
