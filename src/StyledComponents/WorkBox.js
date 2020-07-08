import React from "react";
import styled from "styled-components";

const Root = styled.article`
  font-size: 24px;
  background-color: #3aafa9;
  margin: 0.5px 0 0 0;
  width: 100%;
  height: 100%;
`;

const ImageRoot = styled.div`
  margin: 0 0 0 10px;
  position: relative;

  & > img {
    height: 300px;
    width: 300px;
  }

  & > article {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 300px;
    width: 300px;
    opacity: 0;
    transition: 0.5s ease;
    background-color: #2b7a78;
  }

  & span:last-child {
    color: #feffff;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    opacity: 1;
    text-decoration: underline;
  }

  &:hover > article {
    opacity: 0.9;
  }

  &:hover > span {
    opacity: 1;
  }
`;

export default function WorkBox({
  className,
  title,
  imgSrc,
  imgAlt,
  jobRole,
  jobDescription,
}) {
  return (
    <Root>
      <ImageRoot className={className}>
        <img src={imgSrc} alt={imgAlt} />
        <article>
          <span>{title}</span>
        </article>
      </ImageRoot>
      <span>Job role: {jobRole}</span>
      <p>What did the job entail? {jobDescription}</p>
    </Root>
  );
}
