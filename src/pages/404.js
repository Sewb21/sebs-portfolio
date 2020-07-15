import React from "react";
import styled from "styled-components";

const Root = styled.article`
  font-size: 24px;
  background-color: #3aafa9;
  height: 1000px;
  margin: 2px 0 0 0;
  display: flex;
  justify-content: center;

  & > p {
    margin: 20% 0 0 0;
  }

  & > a {
    color: #feffff;
    text-decoration: none;
    margin: 20% 0 0 10px+;
  }

  & > a:hover {
    color: black;
    text-decoration: underline;
  }
`;

export default function notFound() {
  return (
    <Root>
      <p>Oh No... Page Not Found!</p>
      <a href="/">Take me back!</a>
    </Root>
  );
}
