import React from "react";
import styled from "styled-components";

const Root = styled.article`
  font-size: 24px;
  background-color: #17252a;
  height: 100%;
  padding: 0 0 30px 0;
  display: flex;
  flex-direction: column;

  & > h1 {
    text-decoration: underline;
    align-self: center;
    color: #feffff;
  }

  & > p {
    font-style: italic;
    margin: 10px 0 0 0px;
    color: #feffff;
    align-self: center;
  }

  @media only screen and (max-width: 475px) {
    & > h1 {
      font-size: 22px;
    }

    & > p {
      font-size: 20px;
      margin: 0 20px 0 20px;
    }
  }
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
