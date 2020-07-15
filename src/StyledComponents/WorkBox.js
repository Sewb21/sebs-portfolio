import React from "react";
import styled from "styled-components";

const Root = styled.article`
  font-size: 24px;
  background-color: #3aafa9;
  margin: 0.5px 0 0 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 400px 1000px;
`;

const ImageRoot = styled.div`
  margin: 25px 0 0 10px;

  & > img {
    height: 350px;
    width: 350px;
  }
`;

const JobDetailContainer = styled.div`
  font-size: 22px;

  & > h3 {
    font-style: italic;
    font-weight: 500;
    font-size: 24px;
  }

  & > a {
    text-decoration: none;
    color: black;
    font-style: italic;
  }

  & > a:hover {
    text-decoration: underline;
    color: #feffff;
    font-size: 24px;
  }
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
  return (
    <Root>
      <ImageRoot className={className}>
        <img src={imgSrc} alt={imgAlt} />
      </ImageRoot>
      <JobDetailContainer>
        <h1>{title}</h1>
        <h3>{jobRole}</h3>
        <p>{technologies}</p>
        <p>{jobDescription}</p>
        <a href={hostedLink}>{hostedLink}</a>
        <br />
        <a href={githubLink}>{githubLink}</a>
        <br />
        <a href={extraLink}>{extraLink}</a>
      </JobDetailContainer>
    </Root>
  );
}
