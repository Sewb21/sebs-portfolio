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

  @media only screen and (max-width: 475px) {
    display: flex;
    flex-direction: column;
  }
`;

const ImageRoot = styled.div`
  margin: 25px 0 25px 10px;
  display: flex;

  & > img {
    height: 350px;
    width: 350px;
  }

  @media only screen and (max-width: 475px) {
    flex-diretion: column;
    margin: 15px 0 0 0;
    justify-content: center;

    & > img {
      height: 250px;
      width: 250px;
      align-self: center;
    }
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

  @media only screen and (max-width: 475px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    & > * {
      align-self: center;
      margin-bottom: 0;
      font-size: 18px;
    }

    & > p {
      margin: 10px 20px 20px 20px;
    }
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
