import React from 'react';
import styled from 'styled-components';
import getDateString from 'utils/utils.js'

const Root = styled.article`
  font-size: 24px;
  background-color: #3aafa9;
  margin-top: 2px;
  & > span {
    font-weight: bold;
    margin: 0 40% 0 40%;
    color: #FEFFFF;
    text-decoration: underline;
    font-size: 28px;
  }
  & > p {
    margin: 10px 20% 0 20%;
    font-size: 28px;
    color: #17252A;
  }
`;

const AboutMeBox = ({children}) => {
  return (
    <Root>
      <span>
        {getDateString(new Date())}
      </span>
      <p>
        {children}
      </p>
    </Root>
  )
}

export default AboutMeBox
