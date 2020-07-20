import React from "react"
import styled from "styled-components"

const Root = styled.p`
  background-color: #feffff;
  margin: 2px 20% 0 20%;
  font-size: 28px;
  color: #17252a;

  @media only screen and (max-width: 475px) {
    font-size: 18px;
    width: 100%;
    margin: 0;
    padding: 0 20px 0 20px;
  }
`

const AboutMeBox = ({ children }) => {
  return (
    <Root>
      <span>{children}</span>
    </Root>
  )
}

export default AboutMeBox
