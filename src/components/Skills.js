import React from "react";
import styled from "styled-components";
import SkillsBox from "../StyledComponents/SkillsBox";

const Root = styled.article`
  font-size: 24px;
  background-color: #3aafa9;
  margin: 0.5px 0 0 0;
  width: 100%;

  & > h1 {
    font-weight: bold;
    margin: 2px 43% 0 43%;
    color: #feffff;
    text-decoration: underline;
    font-size: 28px;
  }
`;

export default function Skills() {
  return (
    <Root>
      <h1>Skills</h1>
      <SkillsBox />
    </Root>
  );
}
