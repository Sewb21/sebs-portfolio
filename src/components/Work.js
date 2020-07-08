import React from "react";
import WorkBox from "../StyledComponents/WorkBox";
import styled from "styled-components";

const Root = styled.article`
  font-size: 24px;
  background-color: #3aafa9;
  margin: 0.5px 0 0 0;
  width: 100%;
  height: 100%;

  & > span {
    font-weight: bold;
    margin: 5% 43% 10px 43%;
    color: #feffff;
    text-decoration: underline;
    font-size: 28px;
  }
`;

const WorkBoxContainer = styled.div`
  display: grid;
`;

const ListWorkBox = styled(WorkBox)``;

export default function Work() {
  return (
    <Root>
      <span>My Work</span>
      <WorkBoxContainer>
        <ListWorkBox
          imgSrc="https://filedn.com/lQJfVGhXSkSJSxgrjbFupmB/f4n_full.jpg"
          imgAlt="Favour-4-a-neighbour logo"
          title="Favour 4 a Neighbour"
          jobRole="Made an app"
          jobDescription="Did some great code"
        />
        <ListWorkBox
          imgSrc="src/images/Sebs-news.png"
          imgAlt="Seb's News Logo"
          title="Seb's News"
          jobRole="Made an app"
        />
      </WorkBoxContainer>
    </Root>
  );
}
