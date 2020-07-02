import React from "react"

import { StyledAnchor1, StyledAnchor2, StyledAnchor3, StyledAnchor4 } from '../StyledComponents/AnchorLink'

import { NewHeader, HeaderH1 } from "styles/HeaderStyles"

export default function Header() {
  return (
    <NewHeader>
      <HeaderH1>Sebs Portfolio</HeaderH1>
        <StyledAnchor1 label='About'/>
        <StyledAnchor2 label='Work'/>
        <StyledAnchor3 label='Skills'/>
        <StyledAnchor4 label='Contact'/>
    </NewHeader>
  )
}
