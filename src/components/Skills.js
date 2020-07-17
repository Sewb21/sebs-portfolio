import React from "react";
import styled from "styled-components";
import SkillsBox from "../StyledComponents/SkillsBox";

const Root = styled.article`
  font-size: 24px;
  background-color: #3aafa9;
  margin: 2px 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > h1 {
    font-weight: bold;
    color: #feffff;
    text-decoration: underline;
    font-size: 28px;
    align-self: center;
  }

  @media only screen and (max-width: 475px) {
    & > h1 {
      margin: 10px 0 0 0;
      font-size: 26px;
    }
  }
`;

export default function Skills() {
  return (
    <Root id="Skills">
      <h1>Skills</h1>
      <SkillsBox />
    </Root>
  );
}
