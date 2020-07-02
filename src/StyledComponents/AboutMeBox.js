import React from 'react';
import styled from 'styled-components';

const Root = styled.p`

`;

const AboutMeBox = ({children}) => {
  return (
    <Root>
      {children}
    </Root>
  )
}

export default AboutMeBox
