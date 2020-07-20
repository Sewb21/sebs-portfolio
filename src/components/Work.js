import React from "react"
import WorkBox from "../StyledComponents/WorkBox"
import styled from "styled-components"
import sebsNewsLogo from "../images/Sebs-News.png"
import Container from "components/Container"
import { GithubIcon, LinkIcon } from "components/Icon"

const Root = styled.article`
  font-size: 24px;
  background-color: #17252a;
  margin: 2px 0 0 0;
  display: flex;
  flex-direction: column;

  & > h1 {
    font-weight: bold;
    color: #feffff;
    text-decoration: underline;
    font-size: 28px;
    align-self: center;
  }

  @media only screen and (max-width: 475px) {
    & > h1 {
      font-size: 26px;
    }
  }
`

const Wrapper = styled(Container)``

const ListWorkBox = styled(WorkBox)``

const sebsNewsLinks = [
  {
    name: "View Live",
    icon: LinkIcon,
    url: "https://sebsnews.netlify.app/",
  },
  {
    name: "Frontend Repo",
    icon: GithubIcon,
    url: "https://github.com/Sewb21/fe-sebs-news",
  },
  {
    name: "Backend Repo",
    icon: GithubIcon,
    url: "https://github.com/Sewb21/be-sebs-news",
  },
]

const f4nLinks = [
  {
    name: "Frontend Repo",
    icon: GithubIcon,
    url: "https://github.com/Sewb21/fe-F4N",
  },
  {
    name: "Backend Repo",
    icon: GithubIcon,
    url: "https://github.com/Sewb21/be-F4N",
  },
]

export default function Work() {
  return (
    <Root id="Work">
      <h1>My Work</h1>
      <Wrapper>
        <ListWorkBox
          imgSrc="https://filedn.com/lQJfVGhXSkSJSxgrjbFupmB/f4n_full.jpg"
          imgAlt="Favour-4-a-neighbour logo"
          title="Favour 4 a Neighbour"
          jobRole="Front End Developer"
          technologies={[
            "JavaScript",
            "React Native",
            "Express.js",
            "Firebase",
            "React Naivgation",
            "React Native Elements",
          ]}
          jobDescription="For the app Favour 4 a Neighbour I was placed on the Front End team and tasked with spiking React Native.
          I set up the React Navigation and also put together the Front End for the app whilst also touching parts of the Back End when setting up Firebase for the Authentication."
          links={f4nLinks}
        />
        <ListWorkBox
          imgSrc={sebsNewsLogo}
          imgAlt="Seb's News Logo"
          title="Seb's News"
          jobRole="Full Stack Developer"
          technologies={["Javascript", "React", "Express.js"]}
          links={sebsNewsLinks}
          jobDescription="I built a web app that delivers news similar to that of 'Reddit' with my own personal twist on it."
        />
      </Wrapper>
    </Root>
  )
}
