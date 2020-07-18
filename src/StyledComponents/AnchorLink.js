import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const AnchorLink = ({ className, label }) => (
  <Link to={`#${label}`} className={className}>
    <span>{label}</span>
    <span>|</span>
  </Link>
);

export const StyledAnchor1 = styled(AnchorLink)`
  color: white;
  font-size: 24px;
  align-self: center;
  text-decoration: none;
  margin-left: 50%;
  & > span:first-child {
    &:hover {
      color: #3aafa9;
      font-size: 26px;
    }
  }
  & > span:last-child {
    color: #3aafa9;
    font-size: 24px;
  }

  @media only screen and (max-width: 475px) {
    display: none;
  }
`;

export const StyledAnchor2 = styled(AnchorLink)`
  color: white;
  font-size: 24px;
  align-self: center;
  text-decoration: none;
  margin-left: 3px;
  & > span:first-child {
    &:hover {
      color: #3aafa9;
      font-size: 26px;
    }
  }
  & > span:last-child {
    color: black;
    font-size: 24px;
    color: #3aafa9;
  }

  @media only screen and (max-width: 475px) {
    display: none;
  }
`;

export const StyledAnchor3 = StyledAnchor2;

export const StyledAnchor4 = StyledAnchor2;
