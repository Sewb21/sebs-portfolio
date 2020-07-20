import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Root = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & + & {
    margin-left: 12px;
  }

  @media only screen and (max-width: 475px) {
    display: none;
  }
`

const Anchor = styled(Link)`
  color: white;
  font-size: 24px;
  text-decoration: none;

  & span:hover {
    text-decoration: underline;
    color: #3aafa9;
  }
`

const Separator = styled.span`
  width: 3px;
  height: 20px;
  margin-left: 12px;
  background-color: #3aafa9;
`

const AnchorLink = ({ className, label }) => (
  <Root>
    <Anchor to={`#${label}`} className={className}>
      <span>{label}</span>
    </Anchor>
    <Separator />
  </Root>
)

export default AnchorLink
