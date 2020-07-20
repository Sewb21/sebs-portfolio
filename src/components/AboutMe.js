import React from "react"
import AboutMeBox from "../StyledComponents/AboutMeBox"
import styled from "styled-components"
import getDateString from "utils/utils.js"

const Root = styled.article`
  font-size: 24px;
  background-color: #feffff;
  margin-top: 2px;
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > h1 {
    font-weight: bold;
    color: #17252a;
    text-decoration: underline;
    font-size: 28px;
  }

  @media only screen and (max-width: 475px) {
    & > h1 {
      font-size: 26px;
    }
  }
`

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
  )
}
