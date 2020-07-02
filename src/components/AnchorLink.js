import React from 'react';
import styled from 'styled-components';

const AnchorLink = ({className, label}) => (
  <a href={`#${label}`} className={className}>
    <span>{label}</span>
    <span>|</span>
  </a>
);

export const StyledAnchor1 = styled(AnchorLink)`
  color: white;
  font-size: 24px;
  align-self: center;
  text-decoration: none;
  margin-left: 50%;
  & > span:first-child {
    &:hover {
      color: #17252A;
      font-size: 26px;
    }
  }
  & > span:last-child {
    color: black;
    font-size: 24px
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
      color: #17252A;
      font-size: 26px;
    }
  }
  & > span:last-child {
    color: black;
    font-size: 24px
  }
  `;

export const StyledAnchor3 = StyledAnchor2

export const StyledAnchor4 = StyledAnchor2;

export const StyledAnchor5 = StyledAnchor2;