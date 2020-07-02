import React from "react"
//components
import { StyledAnchor1, StyledAnchor2, StyledAnchor3, StyledAnchor4, StyledAnchor5 } from 'components/AnchorLink'
//styles
import { NewHeader, HeaderH1 } from "styles/HeaderStyles"

export default function Header() {
  return (
    <NewHeader>
      <HeaderH1>Sebs Portfolio</HeaderH1>
        <StyledAnchor1 label='About'/>
        <StyledAnchor2 label='Work'/>
        <StyledAnchor3 label='Skills'/>
        <StyledAnchor4 label='Blog'/>
        <StyledAnchor5 label='Contact'/>
    </NewHeader>
  )
}
