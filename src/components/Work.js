import React from "react";
import WorkBox from "../StyledComponents/WorkBox";
import styled from "styled-components";
import sebsNewsLogo from "../images/Sebs-News.png";

const Root = styled.article`
  font-size: 24px;
  background-color: #17252a;
  margin: 2px 0 0 0;
  width: 100%;
  height: 100%;
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
`;

const WorkBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListWorkBox = styled(WorkBox)``;

export default function Work() {
  return (
    <Root id="Work">
      <h1>My Work</h1>
      <WorkBoxContainer>
        <ListWorkBox
          imgSrc="https://filedn.com/lQJfVGhXSkSJSxgrjbFupmB/f4n_full.jpg"
          imgAlt="Favour-4-a-neighbour logo"
          title="Favour 4 a Neighbour"
          jobRole="Front End Developer"
          technologies="JavaScript, React Native, Express.js, Firebase, React Navigation, React Native Elements"
          jobDescription="For the app Favour 4 a Neighbour I was placed on the Front End team and tasked with spiking React Native.
          I set up the React Navigation and also put together the Front End for the app whilst also touching parts of the Back End when setting up Firebase for the Authentication."
          hostedLink="https://github.com/Sewb21/fe-F4N"
          githubLink="https://github.com/Sewb21/be-F4N"
        />
        <ListWorkBox
          imgSrc={sebsNewsLogo}
          imgAlt="Seb's News Logo"
          title="Seb's News"
          jobRole="Full Stack Developer"
          technologies="JavaScript, React, Express.js"
          jobDescription="I built a web app that delivers news similar to that of 'Reddit' with my own personal twist on it."
          hostedLink="https://sebsnews.netlify.app/"
          githubLink="https://github.com/Sewb21/fe-sebs-news"
          extraLink="https://github.com/Sewb21/be-sebs-news"
        />
      </WorkBoxContainer>
    </Root>
  );
}
