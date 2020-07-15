import React from "react";
import styled from "styled-components";

const Root = styled.article`
  font-size: 24px;
  background-color: #3aafa9;
  height: 100%;
  width: 50%;
  padding: 0 0 20px 0;
  display: flex;
  align-items: center;
  margin: auto;

  & > h3 {
    margin: 0 5px 0 0;
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