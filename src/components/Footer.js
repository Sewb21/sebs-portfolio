import React from "react"
import styled from "styled-components"

const Root = styled.div`
  font-size: 15px;
  color: #feffff;
  display: flex;
  justify-content: center;

  & > a {
    align-self: center;
    margin: 0 0 0 20px;
    color: #feffff;
    text-decoration: none;
  }

  & > a:hover {
    text-decoration: underline;
    font-style: italic;
  }

  @media only screen and (max-width: 475px) {
    font-size: 12px;
    padding-bottom: 8px;
    & > p {
      margin: 5px;
    }

    & > a {
      margin: 5px;
    }
  }
`

export default function Footer() {
  return (
    <Root>
      <p>2020, Full Stack Software Developer based in Clitheroe, UK.</p>
      <a href="#Header">Back to top</a>
    </Root>
  )
}
