import React from "react"
import githubLogo from "../../Logos/GitHub-Mark-32px.png"
import linkedinLogo from "../../Logos/linkedin-logo.png"
import AnchorLink from "../StyledComponents/AnchorLink"
import Container from "components/Container"
import styled from "styled-components"

const NewHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.dark_green};
  height: 100px;
  width: 100%;
  box-shadow: 3px 3px 5px 6px #ccc;

  & h1 {
    color: #feffff;
    margin: 0;
    // padding: 25px 5px 25px 5px;
  }

  // @media only screen and (max-width: 475px) {
  //   width: 100%;
  //   height: 80px;
  //   justify-content: space-between;

  //   & > h1 {
  //     font-size: 24px;
  //   }
  // }
`

const Wrapper = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const AnchorContainer = styled.div`
  display: flex;
  align-items: center;
`

const ImageLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 16px;

  & > a > img {
    height: 25px;
    width: 25px;
    transition: 0.12s transform ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  & > a + a {
    margin-left: 16px;
  }

  @media only screen and (max-width: 475px) {
    & > img {
      align-self: center;
      margin: 80% 10px 40% 0;
    }

    font-size: 24px;
  }
`

// TODO: Header text a lil smaller on mobile.

export default function Header({ githubLink, linkedinLink }) {
  return (
    <NewHeader id="Header">
      <Wrapper>
        <h1>Sebs Portfolio</h1>
        <AnchorContainer>
          <AnchorLink label="About" />
          <AnchorLink label="Work" />
          <AnchorLink label="Skills" />
          <AnchorLink label="Contact" />
          <ImageLinks>
            <a href={githubLink}>
              <img src={githubLogo} alt="github logo" />
            </a>
            <a href={linkedinLink}>
              <img src={linkedinLogo} alt="linkedin logo" />
            </a>
          </ImageLinks>
        </AnchorContainer>
      </Wrapper>
    </NewHeader>
  )
}
