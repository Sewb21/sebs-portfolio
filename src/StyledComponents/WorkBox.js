import React from 'react';
import styled from 'styled-components';

const Root = styled.article`
  font-size: 24px;
  background-color: #2B7A78;
  margin-top: 2px;
  width: 100%;
  height: 400px;
  & > span {
    font-weight: bold;
    margin: 0 43% 0 43%;
    color: #FEFFFF;
    text-decoration: underline;
    font-size: 28px;
  }
`;

export default function WorkBox({ children }) {
  return (
    <Root>
      <span>My Work</span>
      <div>
        { children }
      </div>
    </Root>
  )
}
