import PropTypes from "prop-types";
import styled from "styled-components";

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & span {
    order: 0;
    opacity: 0.5;
    font-size: 0.625rem;
    margin-bottom: 4px;
  }

  & p {
    margin: 0;
    font-size: 16px;
    order: ${({ reverse }) => (reverse ? -1 : 1)};
  }

  & + & {
    margin-top: 16px;
  }
`;

TextGroup.propTypes = {
  reverse: PropTypes.bool,
};

TextGroup.defaultProps = {
  reverse: false,
};

export default TextGroup;
