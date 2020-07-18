import styled from "styled-components";

const Container = styled.div`
  max-width: ${({ maxWidth }) => maxWidth}px;
  width: 100%;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
`;

Container.defaultProps = {
  maxWidth: 1440,
};

export default Container;
