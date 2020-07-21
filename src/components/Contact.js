import React from "react"
import styled from "styled-components"
import ContactBox from "../StyledComponents/ContactBox"
import {
  GithubIcon,
  LinkedInIcon,
  MobileIcon,
  EmailIcon,
  PersonAtComputerIcon,
} from "components/Icon"

const Root = styled.article`
  font-size: 24px;
  background-color: #17252a;
  margin: 2px 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > h1 {
    font-weight: bold;
    margin: 20px 0 0 0;
    color: #feffff;
    text-decoration: underline;
    font-size: 28px;
    align-self: center;
  }

  @media only screen and (max-width: 475px) {
    & > h1 {
      margin: 10px 0 0 0;
      font-size: 26px;
    }
  }
`

const myDetails = [
  {
    value: "Seb Smith",
    icon: PersonAtComputerIcon,
  },
  { value: "hello@sebsmith.dev", icon: EmailIcon, url: "hello@sebsmith.dev" },
  { value: "07904 107737", icon: MobileIcon },
  {
    value: "https://www.linkedin.com/in/seb-smith",
    icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/seb-smith-34a20a1a6",
  },
  {
    value: "https://github.com/Sewb21",
    icon: GithubIcon,
    url: "https://github.com/Sewb21",
  },
]

export default function Contact() {
  return (
    <Root id="Contact">
      <h1>Contact</h1>
      <ContactBox details={myDetails} />
    </Root>
  )
}
