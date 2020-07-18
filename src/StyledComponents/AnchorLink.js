import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

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
`;

const Anchor = styled(Link)`
  color: white;
  font-size: 24px;
  text-decoration: none;
`;

const Separator = styled.span`
  width: 3px;
  height: 20px;
  margin-left: 12px;
  background-color: #3aafa9;
`;

const AnchorLink = ({ className, label }) => (
  <Root>
    <Anchor to={`#${label}`} className={className}>
      <span>{label}</span>
    </Anchor>
    <Separator />
  </Root>
);

// export const StyledAnchor1 = styled(AnchorLink)`
//   color: white;
//   font-size: 24px;
//   align-self: center;
//   text-decoration: none;

//   & > span:first-child {
//     &:hover {
//       color: #3aafa9;
//       font-size: 26px;
//     }
//   }
//   & > span:last-child {
//     color: #3aafa9;
//     font-size: 24px;
//   }
// `;

// export const StyledAnchor2 = styled(AnchorLink)`
//   color: white;
//   font-size: 24px;
//   align-self: center;
//   text-decoration: none;
//   & > span:first-child {
//     &:hover {
//       color: #3aafa9;
//       font-size: 26px;
//     }
//   }
//   & > span:last-child {
//     color: black;
//     font-size: 24px;
//     color: #3aafa9;
//   }

//   @media only screen and (max-width: 475px) {
//     display: none;
//   }
// `;

// export const StyledAnchor3 = StyledAnchor2;

// export const StyledAnchor4 = StyledAnchor2;

export default AnchorLink;
