import React from "react";
import githubLogo from "../../Logos/GitHub-Mark-32px.png";
import linkedinLogo from "../../Logos/linkedin-logo.png";
import {
  StyledAnchor1,
  StyledAnchor2,
  StyledAnchor3,
  StyledAnchor4,
} from "../StyledComponents/AnchorLink";
import styled from "styled-components";

const NewHeader = styled.header`
  background-color: #3aafa9;
  height: 100px;
  display: flex;

  & > h1 {
    color: #feffff;
    margin: 0;
    padding: 25px 5px 25px 5px;
  }
`;

const ImageLink = styled.a`
  & > img {
    height: 25px;
    width: 25px;
    margin: 40px 0 0 5px;
  }
  & > img:hover {
    height: 27px;
    width: 27px;
  }
`;

const AnchorContainer = styled.div`
  display: flex;
  margin: 0 20px 0 50%;
`;

export default function Header({ githubLink, linkedinLink }) {
  return (
    <NewHeader id="Header">
      <h1>Sebs Portfolio</h1>
      <AnchorContainer>
        <StyledAnchor1 label="About" />
        <StyledAnchor2 label="Work" />
        <StyledAnchor3 label="Skills" />
        <StyledAnchor4 label="Contact" />
        <ImageLink href={githubLink}>
          <img src={githubLogo} alt="github logo" />
        </ImageLink>
        <ImageLink href={linkedinLink}>
          <img src={linkedinLogo} alt="linkedin logo" />
        </ImageLink>
      </AnchorContainer>
    </NewHeader>
  );
}
