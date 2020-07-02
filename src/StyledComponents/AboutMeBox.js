import React from 'react';
import styled from 'styled-components';
import getDateString from 'utils/utils.js'

const Root = styled.p`
  font-size: 24px;
  background-color: #3aafa9;
  margin-top: 3px;
  & > span {
    font-weight: bold;
    margin-left: 45%;
    color: #17252A;
    text-decoration:
  }
  & > p {
    margin: 10px 25% 0 25%;
    font-size: 26px;
    color: #FEFFFF;
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
