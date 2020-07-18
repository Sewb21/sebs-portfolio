import React from "react";
import styled from "styled-components";

const Root = styled.article`
  font-size: 24px;
  background-color: #17252a;
  height: 100%;
  width: 50%;
  padding: 0 0 20px 0;
  display: flex;
  align-items: center;
  margin: auto;

  & > h3 {
    margin: 0 5px 0 0;
    color: #feffff;
  }

  & > p {
    color: #feffff;
  }

  & > a {
    color: #feffff;
    text-decoration: none;
  }

  & > a:hover {
    color: black;
    text-decoration: underline;
    font-size: 26px;
  }

  @media only screen and (max-width: 475px) {
    margin: 0;
    width 100%;

    & > h3 {
      font-size: 22px;
      margin-left: 10px;
    }

    & > p {
      font-size: 18px;
    }

    & > a {
      font-size: 16px;
    }
  }
`;

export default function ContactBox({ label, value, link }) {
  if (link) {
    return (
      <Root>
        <h3>{label}</h3>
        <a href={link}>{value}</a>
      </Root>
    );
  }

  return (
    <Root>
      <h3>{label}</h3>
      <p>{value}</p>
    </Root>
  );
}
