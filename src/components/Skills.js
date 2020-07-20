import React from "react"
import styled from "styled-components"
import SkillsBox from "../StyledComponents/SkillsBox"
import {
  JavascriptIcon,
  NodeJSIcon,
  HTMLIcon,
  CSSIcon,
  PSQLIcon,
  GitIcon,
  YarnIcon,
  NPMIcon,
  ReactIcon,
  ReactNativeIcon,
  GatsbyIcon,
  ExpressIcon,
  StyledComponentsIcon,
} from "components/Icon"

const Root = styled.article`
  font-size: 24px;
  background-color: #17252a;
  margin: 2px 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > h2 {
    font-weight: bold;
    color: #feffff;
    text-decoration: underline;
    font-size: 32px;
    align-self: center;
  }

  @media only screen and (max-width: 475px) {
    & > h2 {
      margin: 10px 0 0 0;
      font-size: 26px;
    }
  }
`

const languages = [
  { skillName: "JavaScript", icon: JavascriptIcon },
  { skillName: "Node.js", icon: NodeJSIcon },
  {
    skillName: "HTML",
    icon: HTMLIcon,
  },
  {
    skillName: "CSS",
    icon: CSSIcon,
  },
  {
    skillName: "PSQL",
    icon: PSQLIcon,
  },
]

const tools = [
  {
    toolName: "Git",
    icon: GitIcon,
  },
  {
    toolName: "Yarn",
    icon: YarnIcon,
  },
  {
    toolName: "NPM",
    icon: NPMIcon,
  },
]

const frameworks = [
  {
    skillName: "React",
    icon: ReactIcon,
  },
  {
    skillName: "React Native",
    icon: ReactNativeIcon,
  },
  {
    skillName: "Gatsby",
    icon: GatsbyIcon,
  },
  {
    skillName: "Express.js",
    icon: ExpressIcon,
  },
  {
    skillName: "Styled Components",
    icon: StyledComponentsIcon,
  },
]

export default function Skills() {
  return (
    <Root id="Skills">
      <h2>Skills</h2>
      <SkillsBox languages={languages} tools={tools} frameworks={frameworks} />
    </Root>
  )
}
