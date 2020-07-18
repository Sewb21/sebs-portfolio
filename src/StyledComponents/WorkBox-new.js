import React from "react";
import styled from "styled-components";

const Root = styled.article`
  font-size: 24px;
  background-color: #17252a;
`;

export default function WorkBox({
  className,
  title,
  imgSrc,
  imgAlt,
  jobRole,
  jobDescription,
  technologies,
  githubLink,
  hostedLink,
  extraLink,
}) {
  return <Root></Root>;
}
