import React from "react"
import styled from "styled-components"

const Root = styled.article`
  font-size: 24px;
  background-color: #17252a;
  height: 100%;
  padding: 0 0 30px 0;
  display: flex;
  flex-direction: column;

  & > h3 {
    text-decoration: underline;
    align-self: center;
    color: #feffff;
    font-size: 26px;
  }

  & > p {
    font-style: italic;
    margin: 10px 0 0 0px;
    color: #feffff;
    align-self: center;
  }

  @media only screen and (max-width: 475px) {
    & > h3 {
      font-size: 22px;
    }

    & > p {
      font-size: 20px;
      margin: 0 20px 0 20px;
    }
  }
`
const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > * + * {
    margin-left: 16px;
  }

  & span {
    & svg {
      fill: #feffff;
      width: 30px;
      height: auto;
      margin: 10px;
    }
      & svg:hover {
        fill: #3aafa9;
      }
    }
  }
}

  @media only screen and (min-width: 800px) {
    & span {
      & svg {
        width: 60px;
        height: auto;
        margin: 50px;
      }
  }
`

export default function SkillsBox({ languages, tools, frameworks }) {
  return (
    <Root>
      <h3>Languages</h3>
      {languages && languages.length ? (
        <SkillsContainer>
          {languages.map(({ icon: Icon, skillName }, key) => (
            <span key={key}>
              {Icon ? <Icon size={28} color="white" /> : null}
            </span>
          ))}
        </SkillsContainer>
      ) : null}
      <h3>Tools</h3>
      {tools && tools.length ? (
        <SkillsContainer>
          {tools.map(({ icon: Icon, toolName }, key) => (
            <span key={key}>
              {Icon ? <Icon size={28} color="white" /> : null}
            </span>
          ))}
        </SkillsContainer>
      ) : null}
      <h3>Frameworks/Libraries</h3>
      {frameworks && frameworks.length ? (
        <SkillsContainer>
          {frameworks.map(({ icon: Icon, skillName }, key) => (
            <span key={key}>
              {Icon ? <Icon size={28} color="white" /> : null}
            </span>
          ))}
        </SkillsContainer>
      ) : null}
    </Root>
  )
}
