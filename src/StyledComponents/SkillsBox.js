import React from "react";
import styled from "styled-components";

const Root = styled.article`
  font-size: 24px;
  background-color: #3aafa9;
  margin: 0.5px 0 0 0;
  width: 100%;
  height: 100%;
`;

export default function SkillsBox() {
  return (
    <Root>
      <h1>Languages</h1>
      <p>JavaScript, Node.js, HTML, CSS, PSQL</p>
      <h1>Tools</h1>
      <p>Git, Yarn, NPM</p>
      <h1>Frameworks/Libraries</h1>
      <p>React, React Native, Gatsby, Express.js, Styled Components</p>
    </Root>
  );
}
