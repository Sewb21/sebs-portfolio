import React from "react";
import AboutMeBox from "../StyledComponents/AboutMeBox";
import styled from "styled-components";
import getDateString from "utils/utils.js";

const Root = styled.article`
  font-size: 24px;
  background-color: #3aafa9;
  margin: 2px 0 0 0;
  wdith: 100%;
  height: 250px;

  & > h1 {
    font-weight: bold;
    margin: 0 40% 15px 40%;
    color: #feffff;
    text-decoration: underline;
    font-size: 28px;`;

export default function AboutMe() {
  return (
    <Root id="About">
      <h1>{getDateString(new Date())}</h1>
      <AboutMeBox>
        Hi I'm Seb! I am a Junior Software Developer, based near Manchester in
        the United Kingdom, with a passion for Front End web development. With
        having recently graduated Northcoders Development Bootcamp, I am hungry
        to get out into the working world and to add value to a company.
      </AboutMeBox>
    </Root>
  );
}
